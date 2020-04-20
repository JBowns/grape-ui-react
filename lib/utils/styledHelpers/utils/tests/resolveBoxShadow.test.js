"use strict";

var _cssDefaults = require("../../cssDefaults");

var _resolvers = require("../resolvers");

describe('resolveBoxShadow', function () {
  it('should return the inherit value if no depth or globalOverrides given', function () {
    // Act
    var actual = (0, _resolvers.resolveBoxShadow)(); // Assert

    expect(actual).toBe(_cssDefaults.CSS_INHERIT_VALUE);
  });
  it('should return the inherit value depth is not a string', function () {
    // Act
    var actual = (0, _resolvers.resolveBoxShadow)(5); // Assert

    expect(actual).toBe(_cssDefaults.CSS_INHERIT_VALUE);
  });
  it('should return the inherit value depth is a string but not valid', function () {
    // Act
    var actual = (0, _resolvers.resolveBoxShadow)('07'); // Assert

    expect(actual).toBe(_cssDefaults.CSS_INHERIT_VALUE);
  });
  it('should return the specified box shadow value', function () {
    // Arrange
    var depth = '06'; // Act

    var actual = (0, _resolvers.resolveBoxShadow)(depth); // Assert

    expect(actual).toBe('0 32px 59px 3px rgba(0,0,0,0.14), 0 12px 72px 11px rgba(0,0,0,0.12), 0 14px 20px -8px rgba(0,0,0,0.2)');
  });
});