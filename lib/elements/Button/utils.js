"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hoverColorButton = exports.activeColorButton = exports.positionButton = exports.lineHeightButton = exports.lineHeightStyle = undefined;

var _styledSystem = require("styled-system");

var _styledHelpers = require("../../utils/styledHelpers");

var _constants = require("./constants");

var lineHeightStyle = exports.lineHeightStyle = (0, _styledSystem.style)({
  // The corresponding CSS property (defaults to prop argument)
  cssProperty: 'line-height',
  // key for theme values
  key: 'lineHeight',
  // React prop name
  prop: 'lineHeight',
  // add a fallback scale object or array, if theme is not present
  scale: ['', '', '', '', ''],
  // accessor function for transforming the value
  transformValue: function transformValue(lineHeight) {
    return parseFloat(lineHeight) || _constants.DEFAULT_BUTTON_LINE_HEIGHT;
  }
});

var lineHeightButton = exports.lineHeightButton = function lineHeightButton(props) {
  return props.lineHeight ? lineHeightStyle(props) : "line-height: ".concat(_constants.DEFAULT_BUTTON_LINE_HEIGHT, ";");
};

var positionStyle = (0, _styledSystem.style)({
  // The corresponding CSS property (defaults to prop argument)
  cssProperty: 'position',
  // key for theme values
  key: 'position',
  // React prop name
  prop: 'position',
  // add a fallback scale object or array, if theme is not present
  scale: ['', '', '', '', ''],
  // accessor function for transforming the value
  transformValue: function transformValue(position) {
    return position || _styledHelpers.POSITION_DEFAULT_VALUE;
  }
});

var positionButton = exports.positionButton = function positionButton(props) {
  return props.position ? positionStyle(props) : "position: ".concat(_styledHelpers.POSITION_DEFAULT_VALUE, ";");
};

var hasVariant = function hasVariant(variant) {
  if (!variant) {
    return false;
  }

  return !!variant;
};

var activeColorButton = exports.activeColorButton = function activeColorButton(props) {
  var bgActiveColor = props.bgActiveColor,
      variant = props.variant;

  if (hasVariant(variant)) {
    return null;
  }

  var color = !bgActiveColor || bgActiveColor === null ? (0, _styledHelpers.resolveColor)('white.light') : (0, _styledHelpers.resolveColor)(bgActiveColor);
  return "background-color: ".concat(color);
};

var hoverColorButton = exports.hoverColorButton = function hoverColorButton(props) {
  var bgHoverColor = props.bgHoverColor,
      variant = props.variant;

  if (hasVariant(variant)) {
    return null;
  }

  var color = !bgHoverColor || bgHoverColor === null ? (0, _styledHelpers.resolveColor)('white.dark') : (0, _styledHelpers.resolveColor)(bgHoverColor);
  return "background-color: ".concat(color);
};