import React from 'react';
import TimePicker from 'rc-time-picker';
import {
  timeFieldPropTypes,
  timeFieldDefaultProps,
} from './utils';

export const TimeComponent = props => {
  const { styleOverrides } = props;
  return (
    <TimePicker
      style={styleOverrides}
      {...props}
    />
  );
};

TimeComponent.propTypes = {
  ...timeFieldPropTypes,
};

TimeComponent.defaultProps = {
  ...timeFieldDefaultProps,
};
