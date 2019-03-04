import { isKeyNestedProp, resolveToProperty } from '../objectHelpers';

describe('When resolving nested JavaScript objects via a string key path', () => {
  it('should return the property value of the intended path', () => {
    const foo = { bar: { baz: 'bat' } };
    let actual = resolveToProperty('bar.baz', foo);
    expect(actual).toEqual('bat');
    actual = resolveToProperty('bar', foo);
    expect(actual).toEqual(foo.bar);
  });
  it('should return undefined of for unresolveToPropertyable paths', () => {
    const foo = { bar: { baz: 'bat' } };
    let actual = resolveToProperty('bar.bart', foo);
    expect(actual).toEqual(undefined);
    actual = resolveToProperty('bat', foo);
    expect(actual).toEqual(undefined);
    actual = resolveToProperty('..', foo);
    expect(actual).toEqual(undefined);
  });
  it('should return undefined, for paths that are not a string', () => {
    const foo = { bar: { baz: 'bat' } };
    let actual = resolveToProperty(42, foo);
    expect(actual).toEqual(undefined);
    actual = resolveToProperty(true, foo);
    expect(actual).toEqual(undefined);
    actual = resolveToProperty({}, foo);
    expect(actual).toEqual(undefined);
    actual = resolveToProperty([], foo);
    expect(actual).toEqual(undefined);
    actual = resolveToProperty(null, foo);
    expect(actual).toEqual(undefined);
    actual = resolveToProperty(undefined, foo);
    expect(actual).toEqual(undefined);
  });
  it('should return undefined, when obj is not an object or not a valid object', () => {
    let actual = resolveToProperty('bar', 42);
    expect(actual).toEqual(undefined);
    actual = resolveToProperty('bar', true);
    expect(actual).toEqual(undefined);
    actual = resolveToProperty('bar', []);
    expect(actual).toEqual(undefined);
    actual = resolveToProperty('bar', {});
    expect(actual).toEqual(undefined);
    actual = resolveToProperty('bar', null);
    expect(actual).toEqual(undefined);
  });
});

describe('When determining if a string key is a nested prop', () => {
  it('should return true when given a valid nested property path, false otherwise', () => {
    let actual = isKeyNestedProp('bar');
    expect(actual).toBeFalsy();
    actual = isKeyNestedProp('.bar');
    expect(actual).toBeFalsy();
    actual = isKeyNestedProp('bar.');
    expect(actual).toBeFalsy();
    actual = isKeyNestedProp('0bar');
    expect(actual).toBeFalsy();
    actual = isKeyNestedProp('bar.bat');
    expect(actual).toBeTruthy();
    actual = isKeyNestedProp('foo.bar.bat');
    expect(actual).toBeTruthy();
    actual = isKeyNestedProp(null);
    expect(actual).toBeFalsy();
  });
});
