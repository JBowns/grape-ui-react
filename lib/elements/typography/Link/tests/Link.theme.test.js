"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _reactTestRenderer = require("react-test-renderer");

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _ = require("..");

require("jest-styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('Link using Theme color', function () {
  it('should return a Link object with custom color', function () {
    var theme = {
      colors: {
        grapeSoda: {
          base: 'hsl(325, 84.6%, 28%)',
          dark: 'hsl(305, 33.9%, 23.7%)',
          light: 'hsl(313, 67.8%, 47.5%)'
        }
      }
    };

    var element = /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/_react2["default"].createElement(_.Link, {
      bg: "grapeSoda.dark",
      color: "grapeSoda.light"
    }, "Lorem Ipsum"));

    var component = _reactTestRenderer2["default"].create(element);

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Link using Theme Font Family', function () {
  it('should return a Link object with a custom font family', function () {
    var theme = {
      fonts: {
        trueSpace: '"DejaVu Sans Mono", "Bitstream Vera Sans Mono", Courier'
      }
    };

    var element = /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/_react2["default"].createElement(_.Link, {
      fontFamily: "trueSpace"
    }, "Lorem Ipsum"));

    var component = _reactTestRenderer2["default"].create(element);

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});