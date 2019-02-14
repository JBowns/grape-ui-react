'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('../');

require('jest-styled-components');

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var assertReactElement = function assertReactElement(element) {
  var component = _reactTestRenderer2.default.create(element);
  return component.toJSON();
};
describe('Assistive Text Component base', function () {
  it('should return an Assistive Text object', function () {
    var element = _react2.default.createElement(
      _.AssistiveText,
      { id: 'assitiveTextIdHelp' },
      'Helper text is here'
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return an Assistive Text object with danger text color', function () {
    var element = _react2.default.createElement(
      _.AssistiveText,
      { color: 'brandDanger', id: 'assitiveTextIdError' },
      'Error text is here'
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});