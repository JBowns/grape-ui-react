import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  bottom,
  display,
  height,
  left,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  position,
  ratio,
  right,
  size,
  space,
  top,
  width,
  zIndex,
} from 'styled-system';
import { passThrough } from 'src/utils/componentHelpers';

const BoxComponent = ({ children, ...props }) => (
  <div {...passThrough(BoxComponent, props)}>
    {children}
  </div>
);
BoxComponent.propTypes = {
  children: PropTypes.any.isRequired,
  ...space.propTypes,
  ...display.propTypes,
  ...height.propTypes,
  ...maxHeight.propTypes,
  ...minHeight.propTypes,
  ...width.propTypes,
  ...maxWidth.propTypes,
  ...minWidth.propTypes,
  ...position.propTypes,
  ...size.propTypes,
  ...ratio.propTypes,
  ...zIndex.propTypes,
  ...top.propTypes,
  ...right.propTypes,
  ...bottom.propTypes,
  ...left.propTypes,
};

export const Box = styled(BoxComponent)`
  ${space}
  ${display}
  ${width}
  ${height}
  ${maxHeight}
  ${minHeight}
  ${maxWidth}
  ${minWidth}
  ${position}
  ${size}
  ${ratio}
  ${zIndex}
  ${top}
  ${right}
  ${bottom}
  ${left}
`;

