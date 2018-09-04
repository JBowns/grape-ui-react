'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('../');

require('jest-styled-components');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _enzyme = require('enzyme');

var _enzymeToJson = require('enzyme-to-json');

var _enzymeToJson2 = _interopRequireDefault(_enzymeToJson);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });
var colorOptions = [{ value: 'red', label: 'Red', color: '#FF5630' }, { value: 'yellow', label: 'Yellow', color: '#FFC400' }, { value: 'green', label: 'Green', color: '#36B37E' }];

describe('SelectField Component base', function () {
  it('should return a SelectField object', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.SelectField, { controlId: 'exampleColor', controlLabel: 'Color', defaultValue: colorOptions[1], id: 'exampleColor', options: colorOptions, sm: true }));
    expect((0, _enzymeToJson2.default)(component.find('SelectField'))).toMatchSnapshot();
  });
});

describe('SelectField Component with assistive text', function () {
  it('should return a SelectField with assistive text', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.SelectField, { assistiveText: 'Please tell me your color', controlId: 'exampleColor', controlLabel: 'Color', defaultValue: colorOptions[1], id: 'exampleColor', options: colorOptions }));
    expect((0, _enzymeToJson2.default)(component.find('SelectField'))).toMatchSnapshot();
  });

  it('should return a SelectField with required text', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.SelectField, { assistiveText: 'Please tell me your color', controlId: 'exampleColor', controlLabel: 'Color', defaultValue: colorOptions[1], id: 'exampleColor', options: colorOptions, required: true }));
    expect((0, _enzymeToJson2.default)(component.find('SelectField'))).toMatchSnapshot();
  });

  it('should return a SelectField with error text', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.SelectField, { assistiveText: 'Please tell me your color', controlId: 'exampleColor', controlLabel: 'Color', defaultValue: colorOptions[1], id: 'exampleColor', options: colorOptions, validationError: 'This is a required field.' }));
    expect((0, _enzymeToJson2.default)(component.find('SelectField'))).toMatchSnapshot();
  });
});

describe('SelectField Component with lg text', function () {
  it('should return a SelectField with style', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.SelectField, { assistiveText: 'Please tell me your color', controlId: 'exampleColor', controlLabel: 'Color', defaultValue: colorOptions[1], id: 'exampleColor', lg: true, options: colorOptions }));
    expect((0, _enzymeToJson2.default)(component.find('SelectField'))).toMatchSnapshot();
  });

  it('should return a SelectField with sm text', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.SelectField, { assistiveText: 'Please tell me your color', controlId: 'exampleColor', controlLabel: 'Color', defaultValue: colorOptions[1], id: 'exampleColor', options: colorOptions, sm: true }));
    expect((0, _enzymeToJson2.default)(component.find('SelectField'))).toMatchSnapshot();
  });

  it('should return a SelectField with orange borderColor', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.SelectField, { assistiveText: 'Please tell me your color', borderColor: 'orange', controlId: 'exampleColor', controlLabel: 'Color', defaultValue: colorOptions[1], id: 'exampleColor', options: colorOptions }));
    expect((0, _enzymeToJson2.default)(component.find('SelectField'))).toMatchSnapshot();
  });

  it('should return a SelectField with bgColor', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.SelectField, { assistiveText: 'Please tell me your color', bgColor: 'red', controlId: 'exampleColor', controlLabel: 'Color', defaultValue: colorOptions[1], id: 'exampleColor', options: colorOptions }));
    expect((0, _enzymeToJson2.default)(component.find('SelectField'))).toMatchSnapshot();
  });

  it('should return a SelectField with activeColor', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.SelectField, { assistiveText: 'Please tell me your color', activeColor: 'blue', controlId: 'exampleColor', controlLabel: 'Color', defaultValue: colorOptions[1], id: 'exampleColor', options: colorOptions }));
    expect((0, _enzymeToJson2.default)(component.find('SelectField'))).toMatchSnapshot();
  });
});

describe('SelectField Component with space', function () {
  it('should return a SelectField with space borderColor', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.SelectField, { assistiveText: 'Please tell me your color', controlId: 'exampleColor', controlLabel: 'Color', defaultValue: colorOptions[1], id: 'exampleColor', m: 4, options: colorOptions, p: 4 }));
    expect((0, _enzymeToJson2.default)(component.find('SelectField'))).toMatchSnapshot();
  });
});

describe('SelectField Component with plainText or disabled', function () {
  it('should return a SelectField with plainText', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.SelectField, { controlId: 'exampleColor', controlLabel: 'Color', defaultValue: colorOptions[1], id: 'exampleColor', plainText: true }));
    expect((0, _enzymeToJson2.default)(component.find('SelectField'))).toMatchSnapshot();
  });
  it('should return a SelectField with disabled', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.SelectField, { controlId: 'exampleColor', controlLabel: 'Color', defaultValue: colorOptions[1], disabled: true, id: 'exampleColor' }));
    expect((0, _enzymeToJson2.default)(component.find('SelectField'))).toMatchSnapshot();
  });
});