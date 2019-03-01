'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonComponent = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _textStyles = require('../../elements/typography/textStyles');

var _componentHelpers = require('../../utils/componentHelpers');

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propsToTrim = Object.assign({}, _styledSystem.alignContent.propTypes, _styledSystem.alignItems.propTypes, _styledSystem.alignSelf.propTypes, _styledSystem.border.propTypes, _styledSystem.borderWidth.propTypes, _styledSystem.bottom.propTypes, _styledSystem.color.propTypes, {
  contained: false
}, _styledSystem.display.propTypes, _styledSystem.flexBasis.propTypes, _styledSystem.flexDirection.propTypes, _styledSystem.flexWrap.propTypes, _styledSystem.height.propTypes, _styledSystem.justifyContent.propTypes, _styledSystem.left.propTypes, _styledSystem.letterSpacing.propTypes, _styledSystem.lineHeight.propTypes, _styledSystem.maxHeight.propTypes, _styledSystem.maxWidth.propTypes, _styledSystem.minHeight.propTypes, _styledSystem.minWidth.propTypes, {
  outline: false
}, _styledSystem.position.propTypes, {
  raised: false
}, _styledSystem.ratio.propTypes, _styledSystem.right.propTypes, _styledSystem.size.propTypes, _styledSystem.space.propTypes, _styledSystem.textAlign.propTypes, _styledSystem.top.propTypes, _textStyles.typography.propTypes, _styledSystem.width.propTypes, _styledSystem.zIndex.propTypes);
var ButtonComponent = function ButtonComponent(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    'button',
    (0, _componentHelpers.removeSomeProps)(props, Object.keys(propsToTrim)),
    children
  );
};
exports.ButtonComponent = ButtonComponent;
ButtonComponent.propTypes = {
  children: _propTypes2.default.any
};
ButtonComponent.defaultProps = {
  children: null
};