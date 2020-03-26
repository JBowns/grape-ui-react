"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInputComponent = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledHelpers = require("../../../utils/styledHelpers");

var _componentHelpers = require("../../../utils/componentHelpers");

var _react3 = require("cleave.js/react");

var _react4 = _interopRequireDefault(_react3);

var _cleavePhone = require("cleave.js/dist/addons/cleave-phone.us");

var _cleavePhone2 = _interopRequireDefault(_cleavePhone);

var _reactTextareaAutosize = require("react-textarea-autosize");

var _reactTextareaAutosize2 = _interopRequireDefault(_reactTextareaAutosize);

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var propsToTrim = ['formStyle', 'labelText', 'plainText', 'validationError', 'currency', 'email', 'formatterOptions', 'inputRef', 'integer', 'maxRows', 'multiline', 'numeric', 'password', 'phone', 'plainText', 'postalCode'].concat(_toConsumableArray(Object.keys(_styledHelpers.control.propTypes)), _toConsumableArray(Object.keys(_styledHelpers.typography.propTypes)));

var getInputType = function getInputType(props) {
  if (props.password) {
    return 'password';
  }

  if (props.email) {
    return 'email';
  }

  return 'text';
};

var getTabIndex = function getTabIndex(plainText) {
  return plainText ? '-1' : '0';
};

var TextInputComponent = exports.TextInputComponent = function TextInputComponent(props) {
  var inputRef = props.inputRef,
      maxRows = props.maxRows,
      multiline = props.multiline,
      plainText = props.plainText,
      otherProps = _objectWithoutProperties(props, ["inputRef", "maxRows", "multiline", "plainText"]);

  if ((0, _utils.isCleaveInput)(otherProps)) {
    return /*#__PURE__*/_react2["default"].createElement(_react4["default"], _extends({
      autoComplete: "no",
      htmlRef: inputRef,
      options: (0, _utils.cleaveOption)(otherProps),
      readOnly: plainText,
      tabIndex: getTabIndex(plainText)
    }, (0, _componentHelpers.removeSomeProps)(otherProps, propsToTrim)));
  }

  if (multiline) {
    return /*#__PURE__*/_react2["default"].createElement(_react2["default"].Fragment, null, /*#__PURE__*/_react2["default"].createElement("div", {
      className: "multiline-scroll-shield"
    }), /*#__PURE__*/_react2["default"].createElement(_reactTextareaAutosize2["default"], _extends({
      inputRef: inputRef,
      maxRows: maxRows,
      readOnly: plainText,
      tabIndex: getTabIndex(plainText)
    }, (0, _componentHelpers.removeSomeProps)(otherProps, propsToTrim))));
  }

  return /*#__PURE__*/_react2["default"].createElement("input", _extends({
    ref: inputRef,
    readOnly: plainText,
    tabIndex: getTabIndex(plainText),
    type: getInputType(otherProps)
  }, (0, _componentHelpers.removeSomeProps)(otherProps, propsToTrim)));
};

TextInputComponent.propTypes = {
  email: _propTypes2["default"].bool,
  inputRef: _styledHelpers.refType,
  maxRows: _propTypes2["default"].number,
  multiline: _propTypes2["default"].bool,
  password: _propTypes2["default"].bool,
  plainText: _propTypes2["default"].bool
};
TextInputComponent.defaultProps = {
  email: false,
  inputRef: function inputRef() {},
  maxRows: 4,
  multiline: false,
  password: false,
  plainText: false
};