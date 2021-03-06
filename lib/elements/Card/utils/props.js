"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.cardDefaultProps = exports.cardPropTypes = exports.cardSecondaryMediaBaseDefaultProps = exports.cardSecondaryMediaBasePropTypes = exports.cardRichMediaBaseDefaultProps = exports.cardRichMediaBasePropTypes = exports.cardInnerBaseDefaultProps = exports.cardInnerBasePropTypes = exports.cardHeaderBaseDefaultProps = exports.cardHeaderBasePropTypes = exports.cardBodyBaseDefaultProps = exports.cardBodyBasePropTypes = exports.cardBaseDefaultProps = exports.cardBasePropTypes = exports.cardActionsBaseDefaultProps = exports.cardActionsBasePropTypes = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach.default)(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context2; (0, _forEach.default)(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

const cardActionsBasePropTypes = {
  cardActions: _propTypes.default.node,
  cardActionsLeft: _propTypes.default.node,
  cardActionsLeftProps: _propTypes.default.object,
  cardActionsProps: _propTypes.default.object,
  cardActionsRight: _propTypes.default.node,
  cardActionsRightProps: _propTypes.default.object
};
exports.cardActionsBasePropTypes = cardActionsBasePropTypes;
const cardActionsBaseDefaultProps = {
  cardActions: '',
  cardActionsLeft: '',
  cardActionsLeftProps: {},
  cardActionsProps: {},
  cardActionsRight: '',
  cardActionsRightProps: {}
};
exports.cardActionsBaseDefaultProps = cardActionsBaseDefaultProps;
const cardBasePropTypes = {
  cardPadding: _propTypes.default.any
};
exports.cardBasePropTypes = cardBasePropTypes;
const cardBaseDefaultProps = {
  cardPadding: 3
};
exports.cardBaseDefaultProps = cardBaseDefaultProps;
const cardBodyBasePropTypes = {
  cardBody: _propTypes.default.node,
  cardBodyProps: _propTypes.default.object
};
exports.cardBodyBasePropTypes = cardBodyBasePropTypes;
const cardBodyBaseDefaultProps = {
  cardBody: '',
  cardBodyProps: {}
};
exports.cardBodyBaseDefaultProps = cardBodyBaseDefaultProps;
const cardHeaderBasePropTypes = {
  cardHeaderProps: _propTypes.default.object,
  cardSubtitle: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.string]),
  cardSubtitleProps: _propTypes.default.object,
  cardThumbnail: _propTypes.default.node,
  cardThumbnailProps: _propTypes.default.object,
  cardTitle: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.string]),
  cardTitleContainerProps: _propTypes.default.object,
  cardTitleProps: _propTypes.default.object
};
exports.cardHeaderBasePropTypes = cardHeaderBasePropTypes;
const cardHeaderBaseDefaultProps = {
  cardHeaderProps: {},
  cardSubtitle: '',
  cardSubtitleProps: {},
  cardThumbnail: '',
  cardThumbnailProps: {},
  cardTitle: '',
  cardTitleContainerProps: {},
  cardTitleProps: {}
};
exports.cardHeaderBaseDefaultProps = cardHeaderBaseDefaultProps;
const cardInnerBasePropTypes = {
  cardInnerProps: _propTypes.default.object
};
exports.cardInnerBasePropTypes = cardInnerBasePropTypes;
const cardInnerBaseDefaultProps = {
  cardInnerProps: {}
};
exports.cardInnerBaseDefaultProps = cardInnerBaseDefaultProps;
const cardRichMediaBasePropTypes = {
  cardRichMedia: _propTypes.default.node,
  cardRichMediaProps: _propTypes.default.object
};
exports.cardRichMediaBasePropTypes = cardRichMediaBasePropTypes;
const cardRichMediaBaseDefaultProps = {
  cardRichMedia: '',
  cardRichMediaProps: {}
};
exports.cardRichMediaBaseDefaultProps = cardRichMediaBaseDefaultProps;
const cardSecondaryMediaBasePropTypes = {
  cardSecondaryMedia: _propTypes.default.node,
  cardSecondaryMediaProps: _propTypes.default.object
};
exports.cardSecondaryMediaBasePropTypes = cardSecondaryMediaBasePropTypes;
const cardSecondaryMediaBaseDefaultProps = {
  cardSecondaryMedia: '',
  cardSecondaryMediaProps: {}
};
exports.cardSecondaryMediaBaseDefaultProps = cardSecondaryMediaBaseDefaultProps;

const cardPropTypes = _objectSpread({}, cardActionsBasePropTypes, {}, cardBasePropTypes, {}, cardBodyBasePropTypes, {}, cardHeaderBasePropTypes, {}, cardInnerBasePropTypes, {}, cardRichMediaBasePropTypes, {}, cardSecondaryMediaBasePropTypes, {
  children: _propTypes.default.node,
  isHidden: _propTypes.default.bool
});

exports.cardPropTypes = cardPropTypes;

const cardDefaultProps = _objectSpread({}, cardActionsBaseDefaultProps, {}, cardBaseDefaultProps, {}, cardBodyBaseDefaultProps, {}, cardHeaderBaseDefaultProps, {}, cardInnerBaseDefaultProps, {}, cardRichMediaBaseDefaultProps, {}, cardSecondaryMediaBaseDefaultProps, {
  background: 'white',
  border: '1px solid #ddd',
  borderRadius: 4,
  children: '',
  isHidden: false,
  mb: [1, null, 2]
});

exports.cardDefaultProps = cardDefaultProps;