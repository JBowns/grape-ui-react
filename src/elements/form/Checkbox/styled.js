import React from 'react';
import PropTypes from 'prop-types';
import { ControlLabel } from 'src/elements/form/ControlLabel';
import { ControlGroup } from 'src/elements/form/ControlGroup';
import { passThrough, removeSomeProps } from 'src/utils/componentHelpers';
import { space } from 'styled-system';
import { PlainText } from 'src/elements/form/PlainText';
import { CheckboxFieldComponent } from './component';
import { defaultControlStylesBase } from '../ControlGroup/baseControlStyle';

const renderValueOrComponent = (component, propsFromComponent) => {
  const {
    controlId, plainText, disabled, value, defaultValue, flexDirection,
  } = propsFromComponent;
  if (plainText) {
    const plainTextProps = {
      value,
      ...removeSomeProps(propsFromComponent, ['controlId', 'labelText', 'assistiveText', 'name', 'onChange', 'options', 'plainText', 'validationError', 'flexDirection']),
    };
    return (<PlainText {...plainTextProps} />);
  }
  const childProps = { id: controlId, ...passThrough(component, propsFromComponent) };
  return (<CheckboxFieldComponent {...childProps} disabled={disabled} flexDirection={flexDirection} value={value || defaultValue} />);
};
export const CheckboxField = props => {
  const {
    activeColor,
    assistiveText,
    controlId,
    disabled,
    labelText,
    required,
    validationError,
    plainText,
    bgColor,
  } = props;

  const labelCaption = !required ? labelText : `${labelText}*`;
  const controlGroupProps = {
    assistiveText,
    controlId,
  };

  return (
    <ControlGroup
      pb={3}
      pt={1}
      {...controlGroupProps}
    >
      <ControlLabel
        activeColor={activeColor}
        bgColor={bgColor}
        disabled={disabled}
        htmlFor={controlId}
        isRelative
        validationError={validationError}
      >
        {labelCaption}
        {renderValueOrComponent(CheckboxField, { ...props, plainText })}
      </ControlLabel>
    </ControlGroup>
  );
};

CheckboxField.propTypes = {
  activeColor: PropTypes.string,
  assistiveText: PropTypes.string,
  bgColor: PropTypes.string,
  controlId: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  flexDirection: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  labelText: PropTypes.string,
  plainText: PropTypes.bool,
  validationError: PropTypes.string,
  ...space.propTypes,
};

CheckboxField.defaultProps = {
  activeColor: defaultControlStylesBase.activeColor,
  assistiveText: '',
  bgColor: defaultControlStylesBase.bgColor,
  disabled: false,
  flexDirection: 'column',
  labelText: '',
  plainText: false,
  validationError: '',
};
