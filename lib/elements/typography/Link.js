'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = undefined;

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _textStyles = require('./textStyles');

var _componentHelpers = require('../../utils/componentHelpers');

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var linkPrimitiveFactory = function linkPrimitiveFactory(props, css) {
  var to = props.to,
      otherProps = _objectWithoutProperties(props, ['to']);

  var propsForPrimitive = null;
  var Primitive = null;
  if (to) {
    Primitive = (0, _styledComponents2.default)(_reactRouterDom.Link)(_templateObject, css);
    propsForPrimitive = props;
  } else {
    Primitive = _styledComponents2.default.a(_templateObject, css);
    propsForPrimitive = otherProps;
  }
  return _react2.default.createElement(Primitive, propsForPrimitive);
};

var linkFactory = function linkFactory(props) {
  var color = props.color,
      hoverColor = props.hoverColor,
      otherProps = _objectWithoutProperties(props, ['color', 'hoverColor']);

  var overrides = Object.assign({}, props, {
    color: color || 'brandLink',
    hoverColor: hoverColor || 'brandLinkHover'
  });
  var baseStyles = (0, _textStyles.textStylesBase)(overrides);
  var css = '\n    ' + baseStyles + '\n    &:hover,\n    &:active {\n      color: ' + (0, _componentHelpers.resolveColor)(overrides.hoverColor) + ';\n      text-decoration: none;\n    }\n  ';
  return linkPrimitiveFactory(otherProps, css);
};

linkFactory.propTypes = {
  color: _propTypes2.default.string,
  hoverColor: _propTypes2.default.string
};

linkFactory.defaultProps = {
  color: '',
  hoverColor: ''
};

linkPrimitiveFactory.propTypes = {
  to: _propTypes2.default.string
};

linkPrimitiveFactory.defaultProps = {
  to: ''
};
var Link = function Link(props) {
  return linkFactory(props);
};

exports.Link = Link;