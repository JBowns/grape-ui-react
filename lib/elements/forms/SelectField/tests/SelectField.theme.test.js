"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _styledComponents = require("styled-components");

var _ = require("..");

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
describe('SelectField using Theme color', () => {
  it('should return a SelectField object with custom color', () => {
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
    }, /*#__PURE__*/_react.default.createElement(_.SelectField, {
      bg: "grapeSoda.dark",
      color: "grapeSoda.light",
      controlId: "exampleControl",
      id: "exampleControl",
      labelText: "Color",
      options: colorOptions,
      sm: true,
      value: colorOptions[1]
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('SelectField using Theme Font Family', () => {
  it('should return a SelectField object with a custom font family', () => {
    const theme = {
      fonts: {
        trueSpace: '"DejaVu Sans Mono", "Bitstream Vera Sans Mono", Courier'
      }
    };

    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/_react.default.createElement(_.SelectField, {
      controlId: "exampleControl",
      fontFamily: "trueSpace",
      id: "exampleControl",
      labelText: "Color",
      options: colorOptions,
      sm: true,
      value: colorOptions[1]
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('SelectField using custom brand colors', () => {
  it('should return a SelectField object with custom brand primary color', () => {
    const theme = {
      colors: {
        brandLink: {
          base: 'hsl(100, 84.6%, 28%)',
          dark: 'hsl(105, 33.9%, 23.7%)',
          light: 'hsl(113, 67.8%, 47.5%)'
        },
        brandLinkHover: {
          base: 'hsl(100, 84.6%, 38%)',
          dark: 'hsl(105, 33.9%, 33.7%)',
          light: 'hsl(113, 67.8%, 57.5%)'
        }
      },
      fonts: {
        base: 'Nunito, sans-serif'
      }
    };

    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/_react.default.createElement(_.SelectField, {
      labelText: "Color",
      name: "selectColor",
      options: colorOptions,
      sm: true,
      value: colorOptions[1]
    }));

    const component = _reactTestRenderer.default.create(element);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});