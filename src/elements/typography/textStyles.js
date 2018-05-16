import { resolveColor } from 'src/utils/componentHelpers';
import { getGlobalStyles } from 'src/global-styles';

const { fontFamily: fontFamilySchema, fontSize: fontSizeSchema } = getGlobalStyles();

const defaultTextStylesBase = {
  color: 'inherit',
  fontFamily: fontFamilySchema.base,
  fontSizeBase: fontSizeSchema.baseFontSize,
  fontWeight: 'inherit',
  italic: false,
  kerning: 'inherit',
  lg: false,
  sm: false,
  textAlign: 'inherit',
};

const getScaleFactor = props => {
  const { sm, lg } = props;
  const { sizeVariants: { base: schemaBase, sm: schemaSm, lg: schemaLg } } = fontSizeSchema;
  let scaleFactor = schemaBase;
  if (lg) {
    scaleFactor = schemaLg;
  } else if (sm) {
    scaleFactor = schemaSm;
  }
  return scaleFactor;
};

const getColor = props => {
  const { color } = props;
  if (!color) {
    return defaultTextStylesBase.color;
  }
  return resolveColor(color);
};

export const textStylesBase = (props = {}) => {
  let overrides = null;
  if (!props || Array.isArray(props)) {
    overrides = defaultTextStylesBase;
  } else {
    overrides = {
      ...defaultTextStylesBase,
      ...props,
      color: getColor(props),
      fontFamily: fontFamilySchema[props.fontFamily] || defaultTextStylesBase.fontFamily,
    };
  }

  const scaleFactor = getScaleFactor(props);
  const {
    color,
    fontFamily,
    fontSizeBase,
    fontWeight,
    italic,
    kerning,
    textAlign,
  } = overrides;
  return `
    font-family: ${fontFamily};
    font-size: calc(${fontSizeBase} * ${scaleFactor});
    font-weight: ${fontWeight};
    letter-spacing: ${kerning};
    line-height: 1.5;
    ${italic ? 'font-style: italic;' : ''}
    color: ${color};
    text-align: ${textAlign};
  `;
};

