import {
  alignContent,
  alignItems,
  alignSelf,
  bottom,
  display,
  flexBasis,
  flexDirection,
  flexWrap,
  height,
  justifyContent,
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
  textAlign,
  textColor,
  textStyle,
  top,
  width,
  zIndex,
  flex,
  order,
} from 'styled-system';

const withStyledSystem = (component, props) => {
  const { disallowAllStyled, allowStyledSpace, allowStyledWidth } = props;
  if (disallowAllStyled) {
    return component.extend`
      ${allowStyledSpace ? space(props) : ''}
      ${allowStyledWidth ? width(props) : ''}
    `;
  }
  return component.extend`
    ${alignContent(props)}
    ${alignItems(props)}
    ${alignSelf(props)}
    ${display(props)}
    ${bottom(props)}
    ${flexBasis(props)}
    ${flexDirection(props)}
    ${flexWrap(props)}
    ${height(props)}
    ${justifyContent(props)}
    ${left(props)}
    ${maxHeight(props)}
    ${maxWidth(props)}
    ${minHeight(props)}
    ${minWidth(props)}
    ${position(props)}
    ${ratio(props)}
    ${right(props)}
    ${size(props)}
    ${space(props)}
    ${textAlign}
    ${textColor}
    ${textStyle(props)}
    ${top(props)}
    ${width(props)}
    ${zIndex(props)}
    ${flex(props)}
    ${order(props)}
  `;
};

export { withStyledSystem };
