import PropTypes from 'prop-types';
import { getGlobalStyles } from 'src/global-styles';
import { resolveColor } from 'src/utils/componentHelpers';

const { border: borderSchema, grid: gridSchema } = getGlobalStyles();
export const control = {
  propTypes: {
    activeColor: PropTypes.string,
    bgColor: PropTypes.string,
    borderColor: PropTypes.string,
    borderRadius: PropTypes.string,
    isFocused: PropTypes.bool,
    padding: PropTypes.string,
    placeholderColor: PropTypes.string,
    plainText: PropTypes.bool,
  },
};
export const defaultControlStylesBase = {
  activeColor: 'brandPrimary',
  bgColor: 'white.light',
  borderColor: borderSchema.borderColor,
  borderRadius: borderSchema.borderRadius.base,
  isFocused: false,
  padding: gridSchema.gutter,
  placeholderColor: 'gray.light',
  plainText: false,
};

const getScaleFactor = props => {
  const { sm, lg } = props;
  const { borderRadius: { base: schemaBase, sm: schemaSm, lg: schemaLg } } = borderSchema;
  let scaleFactor = schemaBase;
  if (lg) {
    scaleFactor = schemaLg;
  } else if (sm) {
    scaleFactor = schemaSm;
  } else {
    scaleFactor = schemaBase;
  }
  return scaleFactor;
};

export const focusStylesBase = props => {
  const { activeColor } = props;
  const focusColor = !activeColor ? resolveColor(defaultControlStylesBase.activeColor) : resolveColor(activeColor);
  return `
    border-color: ${focusColor};
    box-shadow: 0 0 0 1px ${focusColor};
    + label { color: ${focusColor}; }
  `;
};

const getFinalStyle = ({
  borderColor,
  focusStyle,
  formStyle,
  padding,
  placeholderColor,
  scaleFactor,
}) => {
  // TODO: Ryan please apply the filled style here
  if (formStyle === 'filled') {
    return `
      border: 2px solid ${borderColor};
      border-radius: ${scaleFactor};
      padding: ${padding};
      outline: 1;
      width: 100%;
      &:focus{
        ${focusStyle}
      }
      &[required] + label:after { content: "*" }
      &[disabled] {
        opacity: 0.3;
        ~ * { color: rgba(0,0,0,0.3); }
      }
      &::placeholder {
        color: ${resolveColor(placeholderColor)}
    }`;
  }
  return `
    border: 1px solid ${borderColor};
    border-radius: ${scaleFactor};
    padding: ${padding};
    outline: 0;
    width: 100%;
    &:focus{
      ${focusStyle}
    }
    &[required] + label:after { content: "*" }
    &[disabled] {
      opacity: 0.3;
      ~ * { color: rgba(0,0,0,0.3); }
    }
    &::placeholder {
      color: ${resolveColor(placeholderColor)}
    }`;
};

export const controlStylesBase = (props = {}) => {
  let overrides = null;
  if (!props || Array.isArray(props)) {
    overrides = defaultControlStylesBase;
  } else {
    overrides = {
      ...defaultControlStylesBase,
      ...props,
      padding: gridSchema[props.gutter] || defaultControlStylesBase.padding,
    };
  }
  const scaleFactor = getScaleFactor(props);
  const {
    activeColor,
    borderColor,
    padding,
    placeholderColor,
    plainText,
    formStyle,
  } = overrides;
  const focusStyle = focusStylesBase(activeColor);

  if (plainText) {
    return `
      border: 0;
      display: block;
      outline: 0;
      padding: ${padding};
    `;
  }
  return getFinalStyle({
    borderColor,
    focusStyle,
    formStyle,
    padding,
    placeholderColor,
    scaleFactor,
  });
};
