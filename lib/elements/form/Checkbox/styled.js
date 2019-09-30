"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxField = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ControlLabel = require("../../../elements/form/ControlLabel");

var _ControlGroup = require("../../../elements/form/ControlGroup");

var _componentHelpers = require("../../../utils/componentHelpers");

var _PlainText = require("../../../elements/form/PlainText");

var _styledHelpers = require("../../../utils/styledHelpers");

var _AssistiveText = require("../../../elements/form/AssistiveText");

var _component = require("./component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propsToTrim = ['activeColor', 'assistiveText', 'bg', 'controlId', 'labelText', 'plainText', 'validationError', 'required'];

var renderValueOrComponent = function renderValueOrComponent(propsFromComponent) {
  var controlId = propsFromComponent.controlId,
      plainText = propsFromComponent.plainText,
      disabled = propsFromComponent.disabled,
      value = propsFromComponent.value,
      defaultValue = propsFromComponent.defaultValue,
      flexDirection = propsFromComponent.flexDirection;

  if (plainText) {
    var plainTextProps = _objectSpread({}, (0, _componentHelpers.removeSomeProps)(propsFromComponent, ['controlId', 'labelText', 'assistiveText', 'name', 'onChange', 'options', 'plainText', 'validationError', 'flexDirection', 'assistiveText', 'validationError', 'required']));

    return _react2["default"].createElement(_PlainText.PlainText, plainTextProps);
  }

  var childProps = _objectSpread({
    id: controlId
  }, (0, _componentHelpers.removeSomeProps)(propsFromComponent, propsToTrim));

  return _react2["default"].createElement(_component.CheckboxFieldComponent, _extends({}, childProps, {
    disabled: disabled,
    flexDirection: flexDirection,
    value: value || defaultValue
  }));
};

var CheckboxField = exports.CheckboxField = function CheckboxField(props) {
  var activeColor = props.activeColor,
      assistiveText = props.assistiveText,
      controlId = props.controlId,
      disabled = props.disabled,
      labelText = props.labelText,
      required = props.required,
      validationError = props.validationError,
      plainText = props.plainText,
      bg = props.bg;
  var labelCaption = !required ? labelText : "".concat(labelText, "*");
  var controlGroupProps = {
    controlId: controlId
  };
  var assistiveProps = {
    assistiveText: assistiveText,
    required: required
  };
  return _react2["default"].createElement(_ControlGroup.ControlGroup, _extends({
    pb: 3,
    pt: 1
  }, controlGroupProps, {
    assistiveText: (0, _AssistiveText.getAssistiveText)(assistiveProps),
    validationError: validationError
  }), _react2["default"].createElement(_ControlLabel.ControlLabel, {
    activeColor: activeColor,
    bg: bg,
    disabled: disabled,
    htmlFor: controlId,
    isRelative: !plainText,
    validationError: validationError
  }, labelCaption), renderValueOrComponent(_objectSpread({}, props, {
    plainText: plainText
  })));
};

CheckboxField.propTypes = {
  activeColor: _propTypes2["default"].string,
  assistiveText: _propTypes2["default"].oneOfType([_propTypes2["default"].object, _propTypes2["default"].string]),
  bg: _propTypes2["default"].string,
  controlId: _propTypes2["default"].string.isRequired,
  disabled: _propTypes2["default"].bool,
  flexDirection: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].array]),
  labelText: _propTypes2["default"].string,
  plainText: _propTypes2["default"].bool,
  required: _propTypes2["default"].bool,
  validationError: _propTypes2["default"].string
};
CheckboxField.defaultProps = {
  activeColor: _styledHelpers.defaultControlStyles.activeColor,
  assistiveText: '',
  bg: _styledHelpers.defaultControlStyles.bg,
  disabled: false,
  flexDirection: 'column',
  labelText: '',
  plainText: false,
  required: false,
  validationError: ''
};