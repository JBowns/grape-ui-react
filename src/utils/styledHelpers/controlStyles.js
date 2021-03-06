import { getGlobalStyles, getGlobalOverrides } from 'src/global-styles';
import { DateFieldControlOverrides } from 'src/elements/forms/DateField/constants';
import { resolveBorderRadius, resolveColor } from './utils';
import { defaultControlStyles, defaultStylesBase } from './cssDefaults';
import { colorCore } from './core';

const { border: borderSchema, grid: gridSchema } = getGlobalStyles();

export const controlColor = props => {
  const { bg, formStyle } = props;
  const nextBg = (formStyle === 'filled' && !bg) ? 'formControlFilledBg' : bg || defaultStylesBase.bg;
  return colorCore({ ...props, bg: nextBg });
};

export const focusStyles = props => {
  const {
    activeColor,
    formStyle,
  } = props;
  const focusColor = !activeColor ? resolveColor(defaultControlStyles.activeColor, props) : resolveColor(activeColor, props);
  if (formStyle === 'filled') {
    return `
      border-bottom: 2px solid ${focusColor};
      margin-bottom: -1px;
      + label { color: ${focusColor}; }
    `;
  }
  return `
    border-color: ${focusColor};
    box-shadow: 0 0 0 1px ${focusColor};
    + label { color: ${focusColor}; }
  `;
};

export const disabledStyle = `
  opacity: 0.3;
  ~ * { color: rgba(0,0,0,0.3); }
`;

const scaleFactor = props => {
  const { sm, lg } = props;
  const { borderRadius: { base: schemaBase, sm: schemaSm, lg: schemaLg } } = borderSchema;
  let value = schemaBase;
  if (lg) {
    value = schemaLg;
  } else if (sm) {
    value = schemaSm;
  } else {
    value = schemaBase;
  }
  return value;
};

export const getFinalFieldPadding = (padding, formStyle, labelText) => ((formStyle === 'filled' && labelText)
  ? `
    padding: ${Number.parseInt(padding, 10) * 1.5}rem ${padding} ${Number.parseInt(padding, 10) / 2}rem;
    .grape-ui-select__control,
    .DayPickerInput > input {
      margin: -${Number.parseInt(padding, 10) * 1.5}rem -${padding} -${Number.parseInt(padding, 10) / 2}rem;
      padding: ${Number.parseInt(padding, 10) * 1.5}rem ${padding} ${Number.parseInt(padding, 10) / 2}rem;
      + .DayPickerInput-OverlayWrapper {
        transform: translateX(-${padding}) translateY(calc(${Number.parseInt(padding, 10) / 2}rem + 2px));
      }
    }
    + label {
      background: transparent;
      line-height: 1;
      top: ${Number.parseInt(padding, 10) - 0.2}rem;
    }
  `
  : `
    padding: ${padding};
    .grape-ui-select__control,
    .DayPickerInput > input {
      margin: -${padding};
      padding: ${padding};
      + .DayPickerInput-OverlayWrapper {
        transform: translateX(-${padding}) translateY(calc(${padding} + 2px));
      }
    }
  `);

const getFinalStyle = props => {
  const {
    activeColor,
    borderColor,
    formStyle,
    labelText,
    padding,
    placeholderColor,
  } = props;
  const scale = scaleFactor(props);
  const globalOverrides = getGlobalOverrides(props);
  const focusStyle = focusStyles({ activeColor, formStyle, ...globalOverrides });
  const resolvedBorderColor = resolveColor(borderColor, globalOverrides);
  const resolvedPlaceholderColor = resolveColor(placeholderColor, globalOverrides);
  const controlSharedStyle = `
    appearance: none;
    border-radius: ${resolveBorderRadius(props)};
    outline: 0;
    width: 100%;
    box-sizing: border-box;
    ${getFinalFieldPadding(padding, formStyle, labelText)}
    &[disabled] {
      ${disabledStyle}
    }
    &:focus, &:focus-within{ ${focusStyle} }
    &::placeholder,
    input::placeholder {
      color: ${resolvedPlaceholderColor}
    }
    ${DateFieldControlOverrides}
  `;
  if (formStyle === 'filled') {
    return `
      border: 0;
      border-bottom: 1px solid ${resolvedBorderColor};
      border-radius: ${scale} ${scale} 0 0;
      ${controlSharedStyle}
    `;
  }
  return `
    border: 1px solid ${resolvedBorderColor};
    border-radius: ${scale};
    ${controlSharedStyle}
  `;
};

export const controlStyles = (props = {}) => {
  let overrides = null;
  overrides = {
    ...defaultControlStyles,
    ...props,
    padding: gridSchema[props.gutter] || defaultControlStyles.padding,
  };
  return getFinalStyle({
    ...props,
    ...overrides,
  });
};
