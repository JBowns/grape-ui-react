import React from 'react';
import PropTypes from 'prop-types';
import { control, typography, refType } from 'src/utils/styledHelpers';
import { removeSomeProps } from 'src/utils/componentHelpers';
import Cleave from 'cleave.js/react';
import CleavePhone from 'cleave.js/dist/addons/cleave-phone.us'; // eslint-disable-line no-unused-vars
import TextareaAutosize from 'react-textarea-autosize';
import { cleaveOption, isCleaveInput } from './utils';

const propsToTrim = [
  'formStyle',
  'labelText',
  'plainText',
  'validationError',
  'currency',
  'email',
  'formatterOptions',
  'inputRef',
  'integer',
  'maxRows',
  'multiline',
  'numeric',
  'password',
  'phone',
  'plainText',
  'postalCode',
  ...Object.keys(control.propTypes),
  ...Object.keys(typography.propTypes),
];

const getInputType = props => {
  if (props.password) {
    return 'password';
  }
  if (props.email) {
    return 'email';
  }
  return 'text';
};

const getTabIndex = plainText => (plainText ? '-1' : '0');

const getRef = (props, ref) => {
  const { inputRef } = props;
  return ref || inputRef;
};

export const TextInputComponent = React.forwardRef((props, ref) => {
  const {
    maxRows, multiline, plainText, ...otherProps
  } = props;
  if (isCleaveInput(otherProps)) {
    return (
      <Cleave
        autoComplete="no"
        htmlRef={getRef(props, ref)}
        options={cleaveOption(otherProps)}
        readOnly={plainText}
        tabIndex={getTabIndex(plainText)}
        {...removeSomeProps(otherProps, propsToTrim)}
      />
    );
  }
  if (multiline) {
    return (
      <>
        <div className="multiline-scroll-shield" />
        <TextareaAutosize
          // inputRef={ref || {}}
          inputRef={getRef(props, ref)}
          maxRows={maxRows}
          readOnly={plainText}
          tabIndex={getTabIndex(plainText)}
          {...removeSomeProps(otherProps, propsToTrim)}
        />
      </>
    );
  }
  return (
    <input
      // ref={ref}
      ref={getRef(props, ref)}
      readOnly={plainText}
      tabIndex={getTabIndex(plainText)}
      type={getInputType(otherProps)}
      {...removeSomeProps(otherProps, propsToTrim)}
    />
  );
});

TextInputComponent.propTypes = {
  email: PropTypes.bool,
  inputRef: refType,
  maxRows: PropTypes.number,
  multiline: PropTypes.bool,
  password: PropTypes.bool,
  plainText: PropTypes.bool,
};

TextInputComponent.defaultProps = {
  email: false,
  inputRef: () => {},
  maxRows: 4,
  multiline: false,
  password: false,
  plainText: false,
};
