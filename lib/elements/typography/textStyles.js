'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textStylesBase = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    font-size: ', ';\n    line-height: 1.5;\n    ', '\n  '], ['\n    font-size: ', ';\n    line-height: 1.5;\n    ', '\n  ']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _fontSize = require('../../assets/json/fontSize.json');

var _fontSize2 = _interopRequireDefault(_fontSize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var textStylesBase = exports.textStylesBase = function textStylesBase(props) {
  var italic = props.italic,
      lg = props.lg,
      sm = props.sm;

  var fontSize = _fontSize2.default.base;
  if (lg) {
    fontSize = _fontSize2.default.lg;
  } else if (sm) {
    fontSize = _fontSize2.default.sm;
  }
  var Primitive = (0, _styledComponents.css)(_templateObject, fontSize, italic ? 'font-style: italic;' : '');
  return Primitive;
};

textStylesBase.propTypes = {
  italic: _propTypes2.default.bool,
  lg: _propTypes2.default.bool,
  sm: _propTypes2.default.bool
};

textStylesBase.defaultProps = {
  italic: false,
  lg: _propTypes2.default.bool,
  sm: _propTypes2.default.bool
};