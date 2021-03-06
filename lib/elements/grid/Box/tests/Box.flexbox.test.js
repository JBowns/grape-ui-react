"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

var _styledComponents = require("styled-components");

var _ = require("../..");

const emptyTheme = {};

const assertReactElement = element => {
  const component = _reactTestRenderer.default.create(element);

  return component.toJSON();
};

describe('Box Component flexbox base', () => {
  it('should return a Box object with alignSelf', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      alignItems: "center"
    }, /*#__PURE__*/_react.default.createElement(_.Box, null, "I stay centered."), /*#__PURE__*/_react.default.createElement(_.Box, {
      alignSelf: "baseline"
    }, "I am at baseline."), /*#__PURE__*/_react.default.createElement(_.Box, {
      alignSelf: ['auto', 'flex-start', 'flex-end', 'stretch']
    }, "I am responsive.")));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with flex', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Flex, null, /*#__PURE__*/_react.default.createElement(_.Box, {
      flex: 1
    }, "I have Flex of 1"), /*#__PURE__*/_react.default.createElement(_.Box, {
      flex: [2, 1, 3, 2]
    }, "I have a responsive Flex"), /*#__PURE__*/_react.default.createElement(_.Box, {
      flex: "1 1 auto"
    }, "I have a flex string")));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with flexBasis', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Flex, null, /*#__PURE__*/_react.default.createElement(_.Box, {
      flexBasis: 1
    }, "I have flex basis of 1"), /*#__PURE__*/_react.default.createElement(_.Box, {
      flexBasis: [2, 1, 3, 2]
    }, "I have a responsive flex basis"), /*#__PURE__*/_react.default.createElement(_.Box, {
      flexBasis: "auto"
    }, "I have flex basis of 1")));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with flexGrow', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Flex, null, /*#__PURE__*/_react.default.createElement(_.Box, {
      flexGrow: 1
    }, "I have flex grow of 1"), /*#__PURE__*/_react.default.createElement(_.Box, {
      flexGrow: [2, 1, 3, 2]
    }, "I have a responsive flex grow")));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with flexShrink', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Flex, null, /*#__PURE__*/_react.default.createElement(_.Box, {
      flexShrink: 1
    }, "I have flex shrink of 1"), /*#__PURE__*/_react.default.createElement(_.Box, {
      flexShrink: [2, 1, 3, 2]
    }, "I have a responsive flex shrink")));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with justifySelf', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      justifyContent: "center"
    }, /*#__PURE__*/_react.default.createElement(_.Box, null, "I stay centered."), /*#__PURE__*/_react.default.createElement(_.Box, {
      justifySelf: "baseline"
    }, "I am at baseline."), /*#__PURE__*/_react.default.createElement(_.Box, {
      justifySelf: ['auto', 'flex-start', 'flex-end', 'stretch']
    }, "I am responsive.")));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with order', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Flex, null, /*#__PURE__*/_react.default.createElement(_.Box, {
      order: [1, 2, 3, 4]
    }, "I am first xs, second sm, third md, fourth lg"), /*#__PURE__*/_react.default.createElement(_.Box, {
      order: [2, 1, 4, 3]
    }, "I am second xs, first sm, fourth md, third lg"), /*#__PURE__*/_react.default.createElement(_.Box, {
      order: [3, 4, 2, 1]
    }, "I am third xs, fourth sm, second md, first lg"), /*#__PURE__*/_react.default.createElement(_.Box, {
      order: [4, 3, 1, 2]
    }, "I am fourth xs, third sm, first md, second lg")));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});