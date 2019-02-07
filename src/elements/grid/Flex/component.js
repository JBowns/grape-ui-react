import React from 'react';
import {
  alignContent,
  alignItems,
  alignSelf,
  flexBasis,
  flexDirection,
  flexWrap,
  justifyContent,
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

export const FlexComponent = ({ children, ...props }) => (
  <div {...passThrough(FlexComponent, props)}>
    {children}
  </div>
);

FlexComponent.propTypes = {
  ...alignContent.propTypes,
  ...alignItems.propTypes,
  ...alignSelf.propTypes,
  ...bottom.propTypes,
  ...display.propTypes,
  ...flexBasis.propTypes,
  ...flexDirection.propTypes,
  ...flexWrap.propTypes,
  ...height.propTypes,
  ...justifyContent.propTypes,
  ...left.propTypes,
  ...maxHeight.propTypes,
  ...maxWidth.propTypes,
  ...minHeight.propTypes,
  ...minWidth.propTypes,
  ...position.propTypes,
  ...ratio.propTypes,
  ...right.propTypes,
  ...size.propTypes,
  ...space.propTypes,
  ...top.propTypes,
  ...width.propTypes,
  ...zIndex.propTypes,
};
