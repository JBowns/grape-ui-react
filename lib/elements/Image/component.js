"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageComponent = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _componentHelpers = require("../../utils/componentHelpers");

var _reactImage = require("react-image");

var _reactImage2 = _interopRequireDefault(_reactImage);

var _styledHelpers = require("../../utils/styledHelpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var componentPropsToRemove = _objectSpread({}, _styledHelpers.layoutProps.propTypes, _styledHelpers.spaceProps.propTypes);

var ImageComponent = exports.ImageComponent = function ImageComponent(_ref) {
  var alt = _ref.alt,
      props = _objectWithoutProperties(_ref, ["alt"]);

  if (!alt) {
    // eslint-disable-next-line no-console
    console.error('🍇: alt property is required for Image'); // there is an explicit requirement scenerio to use console here.
  }

  return _react2.default.createElement(_reactImage2.default, _extends({
    alt: alt
  }, (0, _componentHelpers.removeSomeProps)(props, Object.keys(componentPropsToRemove))));
};

ImageComponent.propTypes = {
  alt: _propTypes2.default.string
};
ImageComponent.defaultProps = {
  alt: ''
};