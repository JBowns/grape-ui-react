import React from 'react';
import styled from 'styled-components';
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

const FlexComponent = ({ children, className, ...props }) => (
  <div {...passThrough(FlexComponent, props)} className={className}>
    {children}
  </div>
);

FlexComponent.propTypes = {
  ...alignContent.propTypes,
  ...alignItems.propTypes,
  ...alignSelf.propTypes,
  ...justifyContent.propTypes,
  ...flexBasis.propTypes,
  ...flexDirection.propTypes,
  ...flexWrap.propTypes,
  ...ratio.propTypes,
  ...space.propTypes,
  ...height.propTypes,
  ...maxHeight.propTypes,
  ...maxWidth.propTypes,
  ...minHeight.propTypes,
  ...minWidth.propTypes,
  ...size.propTypes,
  ...width.propTypes,
};

export const Flex = styled(FlexComponent)`
  display: flex;
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
  ${justifyContent}
  ${alignContent}
  ${alignItems}
  ${alignSelf}
  ${flexBasis}
  ${flexDirection}
  ${flexWrap}
`;
