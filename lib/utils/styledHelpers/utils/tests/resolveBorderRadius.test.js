"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var mockGlobalStyles = _interopRequireWildcard(require("../../../../global-styles"));

var _resolvers = require("../resolvers");

describe('resolveBorderRadius', () => {
  const border = {
    borderRadius: {
      base: '4px',
      lg: '8px',
      sm: '2px'
    }
  };
  beforeEach(() => {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      border
    });
  });
  it('should return the base value 4px if no props', () => {
    // Act
    const actual = (0, _resolvers.resolveBorderRadius)({}); // Assert

    const expected = '4px';
    expect(actual).toBe(expected);
  });
  it('should return the base value 4px if no sm, lg or borderRadius or globalOverrides given', () => {
    // Arrange
    const props = {}; // Act

    const actual = (0, _resolvers.resolveBorderRadius)(props); // Assert

    const expected = '4px';
    expect(actual).toBe(expected);
  });
  it('should return the sm specified size', () => {
    // Arrange
    const props = {
      sm: true
    }; // Act

    const actual = (0, _resolvers.resolveBorderRadius)(props); // Assert

    const expected = '2px';
    expect(actual).toBe(expected);
  });
  it('should return the lg specified size', () => {
    // Arrange
    const props = {
      lg: true
    }; // Act

    const actual = (0, _resolvers.resolveBorderRadius)(props); // Assert

    const expected = '8px';
    expect(actual).toBe(expected);
  });
  it('should return a custom border radius', () => {
    // Arrange
    const borderRadius = '50%';
    const props = {
      borderRadius
    }; // Act

    const actual = (0, _resolvers.resolveBorderRadius)(props); // Assert

    expect(actual).toBe(borderRadius);
  });
});