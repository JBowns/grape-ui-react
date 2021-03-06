"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _styledComponents = require("styled-components");

var _globalStyles = require("../../../global-styles");

var _styledHelpers = require("../../../utils/styledHelpers");

var _ = require("..");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach.default)(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context2; (0, _forEach.default)(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

const assertReactElement = element => {
  const component = _reactTestRenderer.default.create(element);

  return component.toJSON();
};

describe('Button using Theme color', () => {
  it('should return a Button object with custom color', () => {
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
    }, /*#__PURE__*/_react.default.createElement(_.Button, {
      bg: "grapeSoda.dark",
      color: "grapeSoda.light"
    }, "Lorem Ipsum"));

    const component = _reactTestRenderer.default.create(element);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Button using Theme Font Family', () => {
  it('should return a Button object with a custom font family', () => {
    const theme = {
      fonts: {
        trueSpace: '"DejaVu Sans Mono", "Bitstream Vera Sans Mono", Courier'
      }
    };

    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/_react.default.createElement(_.Button, {
      fontFamily: "trueSpace"
    }, "Lorem Ipsum"));

    const component = _reactTestRenderer.default.create(element);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Button using theme border radius', () => {
  const props = {
    theme: {
      border: {
        borderRadius: {
          base: '8px',
          lg: '12px',
          sm: '4px'
        }
      }
    }
  };
  const globalOverrides = (0, _globalStyles.getGlobalOverrides)(props);

  const theme = _objectSpread({
    space: [0, 4, 8, 16]
  }, globalOverrides);

  describe('Button', () => {
    it('should return a Button with lg border radius styling based on theme.border.borderRadius', () => {
      const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react.default.createElement(_.Button, {
        lg: true
      }, "Custom lg button"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
});
describe('Button using variant styles', () => {
  const theme = {
    buttons: _objectSpread({}, (0, _styledHelpers.buttonThemes)()),
    space: [0, 4, 8, 16]
  };
  describe('Button with variant set to primary', () => {
    it('should return a Button with primary styling', () => {
      const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react.default.createElement(_.Button, {
        variant: "primary"
      }, "Do this"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
  describe('Button with variant set to danger', () => {
    it('should return a Button with danger styling', () => {
      const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react.default.createElement(_.Button, {
        variant: "danger"
      }, "Do this"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
  describe('Button with variant set to contained-light', () => {
    it('should return a Button with contained-light styling', () => {
      const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react.default.createElement(_.Button, {
        variant: "contained-light"
      }, "Do this"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
  describe('Button with variant set to contained-danger', () => {
    it('should return a Button with contained-danger styling', () => {
      const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react.default.createElement(_.Button, {
        variant: "contained-danger"
      }, "Do this"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
  describe('Button set to an unknown variant', () => {
    it('should return a Button with no variant styling', () => {
      const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react.default.createElement(_.Button, {
        variant: "not-a-variant"
      }, "Do this"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
  describe('Button set with no variant', () => {
    it('should return a Button with bg and color styling preserved', () => {
      const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react.default.createElement(_.Button, {
        bg: "yellow",
        color: "yellow.dark"
      }, "Do this"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
  describe('Button set with variant, bg and color', () => {
    it('should return a Button with bg and color styling overwriting the variant bg and color style', () => {
      const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react.default.createElement(_.Button, {
        bg: "yellow",
        color: "yellow.dark",
        variant: "contained-danger"
      }, "Do this"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
});
describe('Button using variant styles with theme colors', () => {
  const props = {
    theme: {
      colors: {
        brandPrimary: {
          base: 'hsl(323.31, 85.61%, 29.98%)',
          dark: 'hsl(302.91, 34.91%, 24.71%)',
          light: 'hsl(312.81, 68.81%, 48.51%)'
        }
      }
    }
  };
  const globalOverrides = (0, _globalStyles.getGlobalOverrides)(props);
  const theme = {
    buttons: _objectSpread({}, (0, _styledHelpers.buttonThemes)(null, globalOverrides)),
    space: [0, 4, 8, 16]
  };
  describe('Button with variant set to contained-primary', () => {
    it('should return a Button with contained-primary styling based on theme.colors', () => {
      const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react.default.createElement(_.Button, {
        variant: "contained-primary"
      }, "Do this"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
});