import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withHideable } from 'src/elements/utils';
import {
  determinateKeyframes,
  indeterminateKeyframes,
  getProgressProps,
  makeColorResolver,
  progressBaseDefaultProps,
  progressBasePropTypes,
  styledSystemAnimation,
} from '../utils';
import { LineComponent, TrackComponent } from './component';

const backgroundIndicatorColor = makeColorResolver('background', 'indicatorColor');
const backgroundTrackColor = makeColorResolver('background', 'trackColor');

const Track = styled(withHideable(TrackComponent))`${backgroundTrackColor}`;

Track.defaultProps = {
  height: 5,
  overflow: 'hidden',
};

const getAnimationName = props => {
  const {
    animationName,
    isDeterminate,
  } = props;
  if (animationName) {
    return animationName;
  }
  if (isDeterminate) {
    return determinateKeyframes();
  }
  return indeterminateKeyframes();
};

const Line = styled(LineComponent)`
  ${backgroundIndicatorColor}
  animation-name: ${getAnimationName};
  ${styledSystemAnimation}
`;

Line.defaultProps = {
  height: '100%',
  width: 1,
};

const getTrackColor = props => (props.hideTrack ? 'transparent' : props.trackColor);

export const LinearProgress = props => {
  const {
    containerProps,
    hideTrack,
    indicatorColor,
    indicatorProps,
    indicatorPropsToTrim,
    isHidden,
    trackColor,
    trackProps,
    trackPropsToTrim,
  } = props;
  // We need to have showProgress hard coded to false to avoid recursion.
  return (
    <Track
      isHidden={isHidden}
      trackColor={
        getTrackColor({ hideTrack, trackColor })
      }
      {...containerProps}
      {...trackProps}
      trackPropsToTrim={trackPropsToTrim}
      // eslint-disable-next-line react/jsx-sort-props
      showProgress={false}
    >
      <Line
        {...getProgressProps(props)}
        indicatorColor={indicatorColor}
        {...indicatorProps}
        indicatorPropsToTrim={indicatorPropsToTrim}
        showProgress={false}
      />
    </Track>
  );
};

LinearProgress.propTypes = {
  ...progressBasePropTypes,
  value: PropTypes.number,
};

LinearProgress.defaultProps = {
  ...progressBaseDefaultProps,
  total: 100,
  value: -1,
};
