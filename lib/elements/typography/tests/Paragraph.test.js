'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Paragraph = require('../Paragraph');

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

require('jest-styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Paragraph Component base', function () {
  it('should return a Paragraph object with base styling', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _Paragraph.Paragraph,
      null,
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Paragraph Component specified styles', function () {
  it('should return a Paragraph object with a green color', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _Paragraph.Paragraph,
      { color: 'green' },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with a serif font-family', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _Paragraph.Paragraph,
      { fontFamily: 'serif' },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with a bold font-weight', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _Paragraph.Paragraph,
      { fontWeight: 'bold' },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with font-style: italic', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _Paragraph.Paragraph,
      { italic: true },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with specified kerning', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _Paragraph.Paragraph,
      { kerning: '1px' },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with font-size: lg', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _Paragraph.Paragraph,
      { lg: true },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with font-size: sm', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _Paragraph.Paragraph,
      { sm: true },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with text-align: right', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _Paragraph.Paragraph,
      { textAlign: 'right' },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with a lead paragraph stlying', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _Paragraph.Paragraph,
      { lead: true },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with text-decoration: underline', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _Paragraph.Paragraph,
      { textDecoration: 'underline' },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});