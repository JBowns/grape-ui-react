'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    ', '\n    margin: 0 0 ', ';\n  '], ['\n    ', '\n    margin: 0 0 ', ';\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _textStyles = require('./textStyles');

var _globalStyles = require('../../global-styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    fontSizeSchema = _getGlobalStyles.fontSize,
    gridSchema = _getGlobalStyles.grid;

var headerFactory = function headerFactory(props) {
  var color = props.color,
      display = props.display,
      propsTag = props.tag,
      otherProps = _objectWithoutProperties(props, ['color', 'display', 'tag']);

  var tag = propsTag || 'h1';
  var overrides = Object.assign({}, props, {
    color: color,
    fontSizeBase: display ? fontSizeSchema.display[tag] : fontSizeSchema[tag],
    fontWeight: display ? '300' : 'inherit'
  });
  var baseStyles = (0, _textStyles.textStylesBase)(overrides);
  var Primitive = _styledComponents2.default[tag](_templateObject, baseStyles, gridSchema.gutter);
  return _react2.default.createElement(Primitive, otherProps);
};

headerFactory.propTypes = {
  color: _propTypes2.default.string,
  display: _propTypes2.default.bool,
  tag: _propTypes2.default.string
};

headerFactory.defaultProps = {
  color: 'inherit',
  display: false,
  tag: 'h1'
};

var Header = function Header(props) {
  return headerFactory(props);
};

Header.h1 = Header;
Header.h2 = function (props) {
  return headerFactory(Object.assign({}, props, { tag: 'h2' }));
};
Header.h3 = function (props) {
  return headerFactory(Object.assign({}, props, { tag: 'h3' }));
};
Header.h4 = function (props) {
  return headerFactory(Object.assign({}, props, { tag: 'h4' }));
};
Header.h5 = function (props) {
  return headerFactory(Object.assign({}, props, { tag: 'h5' }));
};
Header.h6 = function (props) {
  return headerFactory(Object.assign({}, props, { tag: 'h6' }));
};
exports.Header = Header;