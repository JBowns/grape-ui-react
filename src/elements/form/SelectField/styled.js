import React from 'react';
import PropTypes from 'prop-types';
import { ControlGroup } from 'src/elements/form/ControlGroup';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { fontWeight, space } from 'styled-system';
import styled from 'styled-components';
import {
  colorCore,
  control,
  controlStyles,
  defaultControlStyles,
  defaultStylesBase,
  focusStyles,
  fontFamilyCore,
  fontSizeCore,
  fontStyleCore,
  letterSpacingCore,
  lineHeightCore,
  resolveColor,
  resolveElevation,
  textAlignCore,
  textDecorationCore,
  typography,
} from 'src/utils/styledHelpers';
import { PlainText } from 'src/elements/form/PlainText';
import { SelectComponent } from './component';

const controlStylesSelectField = props => {
  if (!props.validationError && !props.isDisabled) {
    return controlStyles(props);
  } if (props.validationError) {
    return controlStyles({ ...props, activeColor: 'brandDanger', borderColor: 'brandDanger' });
  }
  return controlStyles({ ...props, activeColor: 'white.light', borderColor: 'white.light' });
};
const focusStyleSelectField = props => {
  if (props.isFocused) {
    return focusStyles(props);
  }
  return '';
};

const reactSelectStylesOverrides = props => {
  const {
    chipBg,
    menuFocusBg,
    menuFocusColor,
    menuSelectedBg,
    menuSelectedColor,
    placeholderColor,
  } = props;
  return `
  .grape-ui-select__control {
    display: flex;
  }
  .grape-ui-select__indicator {
    padding: 0;
  }
  .grape-ui-select__indicator-separator {
    display: none;
  }
  .grape-ui-select__value-container {
    padding: 0;
  }
  .grape-ui-select__menu {
    position: absolute;
    left: 0;
    margin: 0;
    padding: 0.5rem 0;
    ${resolveElevation('03')}
  }
  .grape-ui-select__option {
    padding: 0.5rem 1rem;
  }
  .grape-ui-select__option--is-focused {
    background: ${resolveColor(menuFocusBg)};
    color: ${resolveColor(menuFocusColor)};
  }
  .grape-ui-select__option--is-selected {
    background: ${resolveColor(menuSelectedBg)};
    color: ${resolveColor(menuSelectedColor)};
  }
  .grape-ui-select__placeholder {
    color: ${resolveColor(placeholderColor)};
  }
  .grape-ui-select__multi-value {
    display: flex;
    margin-right: 0.25rem;
    padding: 0.25rem;
    border-radius: 4px;
    background-color: ${resolveColor(chipBg)};
    font-size: 80%;
  }
  .grape-ui-select__multi-value__label {
    padding: 0 0.25rem;
  }
  .grape-ui-select__multi-value__remove {
    cursor: pointer;
    &:hover path {
      fill: ${resolveColor('brandLinkHover')}
    }
  }
`;
};

export const SelectFieldComponent = styled(SelectComponent)`
  ${colorCore}
  ${fontFamilyCore}
  ${fontSizeCore}
  ${fontWeight}
  ${letterSpacingCore}
  ${lineHeightCore}
  ${fontStyleCore}
  ${textAlignCore}
  ${textDecorationCore}
  ${controlStylesSelectField}
  ${focusStyleSelectField}
  ${reactSelectStylesOverrides}
`;
SelectFieldComponent.propTypes = {
  ...control.propTypes,
  chipBg: PropTypes.string,
  isDisabled: PropTypes.bool,
  menuFocusBg: PropTypes.string,
  menuFocusColor: PropTypes.string,
  menuSelectedBg: PropTypes.string,
  menuSelectedColor: PropTypes.string,
  multiple: PropTypes.bool,
  ...typography.propTypes,
  validationError: PropTypes.string,
};

SelectFieldComponent.defaultProps = {
  chipBg: 'white.dark',
  ...defaultControlStyles,
  ...defaultStylesBase,
  isDisabled: false,
  menuFocusBg: 'brandLinkHover',
  menuFocusColor: 'white',
  menuSelectedBg: 'brandLink',
  menuSelectedColor: 'white',
  multiple: false,
  validationError: '',
};

const renderSelectFieldComponent = selectFieldProps => {
  const {
    defaultValue,
    value,
  } = selectFieldProps;

  return (<SelectFieldComponent {...selectFieldProps} value={value || defaultValue} />);
};
const propsToTrim = [
  'activeColor',
  'bg',
  'controlId',
  'disabled',
  'assistiveText',
  'labelText',
  'required',
  'plainText',
];
const renderValueOrComponent = propsFromComponent => {
  const {
    controlId,
    disabled,
    plainText,
  } = propsFromComponent;
  if (plainText) {
    const plainTextProps = removeSomeProps(propsFromComponent, ['controlId', 'labelText', 'assistiveText', 'validationError']);
    return <PlainText {...plainTextProps} />;
  }
  const childProps = {
    id: controlId,
    ...removeSomeProps(propsFromComponent, propsToTrim),
    isDisabled: disabled,
  };
  return renderSelectFieldComponent(childProps);
};
export const SelectField = props => {
  const {
    activeColor,
    bg,
    controlId,
    disabled,
    assistiveText,
    labelText,
    required,
    validationError,
    plainText,
  } = props;
  const newlabel = !required ? labelText : `${labelText}*`;
  return (
    <ControlGroup
      activeColor={activeColor}
      assistiveText={assistiveText}
      bg={bg}
      controlId={controlId}
      disabled={disabled}
      labelText={newlabel}
      pb={3}
      pt={1}
      validationError={validationError}
    >
      {renderValueOrComponent({ plainText, ...props })}
    </ControlGroup>
  );
};

SelectField.propTypes = {
  activeColor: PropTypes.string,
  assistiveText: PropTypes.string,
  bg: PropTypes.string,
  controlId: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  labelText: PropTypes.string.isRequired,
  plainText: PropTypes.bool,
  validationError: PropTypes.string,
  ...space.propTypes,
};

SelectField.defaultProps = {
  activeColor: defaultControlStyles.activeColor,
  assistiveText: '',
  bg: defaultControlStyles.bgColor,
  disabled: false,
  plainText: false,
  validationError: '',
};
