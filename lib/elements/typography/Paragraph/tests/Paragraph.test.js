"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _styledComponents = require("styled-components");

var _ = require("..");

require("jest-styled-components");

describe('Paragraph Component base', () => {
  it('should return a Paragraph object with base styling', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Paragraph, null, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Paragraph Component specified styles', () => {
  it('should return a Paragraph object with a green color', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Paragraph, {
      color: "green"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with ellipsis', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Paragraph, {
      ellipsis: true
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with a serif font-family', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Paragraph, {
      fontFamily: "serif"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with a bold font-weight', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Paragraph, {
      fontWeight: "bold"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with font-style: italic', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Paragraph, {
      italic: true
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with specified kerning', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Paragraph, {
      kerning: "1px"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with font-size: lg', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Paragraph, {
      lg: true
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with font-size: sm', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Paragraph, {
      sm: true
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with text-align: right', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Paragraph, {
      textAlign: "right"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with a lead paragraph stlying', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Paragraph, {
      lead: true
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with text-decoration: underline', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Paragraph, {
      textDecoration: "underline"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with custom margins', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Paragraph, {
      mb: 1,
      mt: 1
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});