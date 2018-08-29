import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ControlLabel } from './ControlLabel';
import { AssistiveText } from './AssistiveText';

const ControlGroup = styled.div``;

export const ControlGroupBase = props => {
  const {
    controlLabel,
    controlId,
    assistiveText,
    validationError,
    children,
  } = props;

  console.log('ControlGroupBase - children', children);

  const displayAssistive = (text, error, id) => {
    if (!text && !error) {
      return null;
    } else if (text && !error) {
      return <AssistiveText id={`${id}Help`}>{text}</AssistiveText>;
    }
    return <AssistiveText color="brandDanger" id={`${id}Error`}>{error}</AssistiveText>;
  };
  // // eslint disable next-line
  // const reactChildDom = React.Children.only(children);
  // console.log('ControlGroupBase - reactChildDom', reactChildDom);
  return (
    <ControlGroup>
      <ControlLabel for={controlId}>{controlLabel}</ControlLabel>
      {children}
      {displayAssistive(assistiveText, validationError, controlId)}
    </ControlGroup>
  );
};

ControlGroupBase.propTypes = {
  assistiveText: PropTypes.string,
  children: PropTypes.any.isRequired,
  controlId: PropTypes.string.isRequired,
  controlLabel: PropTypes.string.isRequired,
  validationError: PropTypes.string,
};

ControlGroupBase.defaultProps = {
  assistiveText: '',
  validationError: '',
};

export const withControlGroup = (Child, props) => {
  class ControlGroupComponent extends React.Component {
    render() {
      const {
        controlLabel,
        controlId,
        assistiveText,
        validationError,
        ...otherProps
      } = this.props;
      const controlJSX = (<ControlGroupBase assistiveText={assistiveText} controlId={controlId} controlLabel={controlLabel} validationError={validationError} > <Child {...otherProps} /> </ControlGroupBase>);
      return controlJSX;
    }
  }
  ControlGroupComponent.propTypes = {
    assistiveText: PropTypes.string,
    controlId: PropTypes.string.isRequired,
    controlLabel: PropTypes.string.isRequired,
    validationError: PropTypes.string,
  };
  ControlGroupComponent.defaultProps = {
    assistiveText: '',
    validationError: '',
  };
  return ControlGroupComponent;
};
