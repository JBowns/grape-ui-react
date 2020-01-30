import React from 'react';
import PropTypes from 'prop-types';
import {
  control,
  refType,
} from 'src/utils/styledHelpers';
import { removeSomeProps } from 'src/utils/componentHelpers';
import Select, { Creatable } from 'react-select';
import { styleOverridesBase } from './utils';

const propsToTrim = [
  ...Object.keys(control.propTypes),
  'chipBg',
  'formStyle',
  'isCreatable',
  'isDisabled',
  'isFocused',
  'labelText',
  'menuSelectedBg',
  'menuSelectedColor',
  'multiple',
  'styleOverrides',
  'validationError',
];
export const SelectComponent = ({ children, ...props }) => {
  const {
    inputRef,
    isCreatable,
    isDisabled,
    isFocused,
    multiple,
  } = props;
  if (isCreatable) {
    return (
      <Creatable
        ref={inputRef}
        className="grape-ui-select-container"
        classNamePrefix="grape-ui-select"
        isDisabled={isDisabled}
        isFocused={isFocused}
        isMulti={multiple}
        styles={styleOverridesBase(props)}
        {...removeSomeProps(props, propsToTrim)}
      >
        {children}
      </Creatable>
    );
  }
  return (
    <Select
      ref={inputRef}
      className="grape-ui-select-container"
      classNamePrefix="grape-ui-select"
      isDisabled={isDisabled}
      isFocused={isFocused}
      isMulti={multiple}
      styles={styleOverridesBase(props)}
      {...removeSomeProps(props, propsToTrim)}
    >
      {children}
    </Select>
  );
};
SelectComponent.propTypes = {
  children: PropTypes.any,
  inputRef: refType,
  isCreatable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isFocused: PropTypes.bool,
  multiple: PropTypes.bool,
  styleOverrides: PropTypes.object,
};
SelectComponent.defaultProps = {
  children: null,
  inputRef: () => {},
  isCreatable: false,
  isDisabled: false,
  isFocused: false,
  multiple: false,
  styleOverrides: {},
};
