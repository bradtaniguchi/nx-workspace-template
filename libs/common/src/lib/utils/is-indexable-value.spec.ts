import { isIndexableValue } from './is-indexable-value';

describe('isIndexableValue', () => {
  test('returns true for string', () =>
    expect(isIndexableValue('key')).toEqual(true));
  test('returns true for symbol', () =>
    expect(isIndexableValue(Symbol('key'))).toEqual(true));
  test('returns true for number', () =>
    expect(isIndexableValue(1)).toEqual(true));

  test('returns false for object', () =>
    expect(isIndexableValue({})).toEqual(false));
  test('returns false for null', () =>
    expect(isIndexableValue(null)).toEqual(false));
  test('returns false for undefined', () =>
    expect(isIndexableValue(undefined)).toEqual(false));
});
