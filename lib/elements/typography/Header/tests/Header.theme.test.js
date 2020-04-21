"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = require("..");

require("jest-styled-components");

describe('Header using Theme color', () => {
  it('should return a Header object with custom color', () => {
    const theme = {
      colors: {
        grapeSoda: {
          base: 'hsl(325, 84.6%, 28%)',
          dark: 'hsl(305, 33.9%, 23.7%)',
          light: 'hsl(313, 67.8%, 47.5%)'
        }
      }
    };

    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/_react.default.createElement(_.Header, {
      bg: "grapeSoda.dark",
      color: "grapeSoda.light"
    }, "Lorem Ipsum"));

    const component = _reactTestRenderer.default.create(element);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Header using Theme Font Family', () => {
  it('should return a Header object with a custom font family', () => {
    const theme = {
      fonts: {
        trueSpace: '"DejaVu Sans Mono", "Bitstream Vera Sans Mono", Courier'
      }
    };

    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/_react.default.createElement(_.Header, {
      fontFamily: "trueSpace"
    }, "Lorem Ipsum"));

    const component = _reactTestRenderer.default.create(element);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Header using overridden base Font Family', () => {
  it('should return a Header object with the custom base font family', () => {
    const theme = {
      fonts: {
        base: 'Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif'
      }
    };

    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/_react.default.createElement(_.Header.h2, null, "Lorem Ipsum"));

    const component = _reactTestRenderer.default.create(element);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});