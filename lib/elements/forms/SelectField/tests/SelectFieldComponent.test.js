"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _styledComponents = require("styled-components");

var _ = require("..");

require("jest-styled-components");

const assertReactElement = element => {
  const component = _reactTestRenderer.default.create(element);

  return component.toJSON();
};

const colorOptions = [{
  color: '#FF5630',
  label: 'Red',
  value: 'red'
}, {
  color: '#FFC400',
  label: 'Yellow',
  value: 'yellow'
}, {
  color: '#36B37E',
  label: 'Green',
  value: 'green'
}];
describe('SelectFieldComponent base', () => {
  it('should return a SelectFieldComponent object', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.SelectFieldComponent, {
      defaultValue: colorOptions[1],
      id: "exampleColor",
      options: colorOptions
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('SelectFieldComponent with some style relate', () => {
  it('should return a SelectFieldComponent lg object', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.SelectFieldComponent, {
      defaultValue: colorOptions[1],
      id: "exampleColor",
      lg: true,
      options: colorOptions
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a SelectFieldComponent sm object', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.SelectFieldComponent, {
      defaultValue: colorOptions[1],
      id: "exampleColor",
      options: colorOptions,
      sm: true
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});