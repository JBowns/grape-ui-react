"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require("react-test-renderer");

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _styledComponents = require("styled-components");

var _ = require("..");

require("jest-styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('Header.h1 Component base', function () {
  it('should return a Header object with base styling', function () {
    var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.Header, null, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Header.h1 Component specified styles', function () {
  it('should return a Header object with a base color (implicit)', function () {
    var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.Header, {
      color: "green"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with a base color', function () {
    var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.Header, {
      color: "green.base"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with a light color', function () {
    var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.Header, {
      color: "green.light"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with a dark color', function () {
    var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.Header, {
      color: "green.dark"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with font-size: display', function () {
    var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.Header, {
      display: true
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with ellipsis', function () {
    var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_.Header, {
      ellipsis: true
    }, "Lorem Ipsum"));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with a specified font-family', function () {
    var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.Header, {
      fontFamily: "monospace"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with a specified font-weight', function () {
    var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.Header, {
      fontWeight: "bold"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with a specified font-weight overriding the display font-weight', function () {
    var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.Header, {
      display: true,
      fontWeight: "bold"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with font-style: italic', function () {
    var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.Header, {
      italic: true
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with font-size: lg', function () {
    var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.Header, {
      lg: true
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with font-size: sm', function () {
    var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.Header, {
      sm: true
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with a specified kerning', function () {
    var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.Header, {
      kerning: "2px"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with a specified text-align', function () {
    var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.Header, {
      textAlign: "right"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with a specified text-decoration', function () {
    var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.Header, {
      textDecoration: "underline"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with custom margin and padding', function () {
    var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.Header, {
      mb: 1,
      mt: 1
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Header Element sizes', function () {
  it('should return a Header h1 object', function () {
    var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.Header.h1, null, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header h2 object', function () {
    var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.Header.h2, null, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header h3 object', function () {
    var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.Header.h3, null, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header h4 object', function () {
    var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.Header.h4, null, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header h5 object', function () {
    var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.Header.h5, null, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header h6 object', function () {
    var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.Header.h6, null, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});