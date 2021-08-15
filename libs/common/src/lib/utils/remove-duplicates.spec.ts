import { removeDuplicates } from './remove-duplicates';

describe('removeDuplicates', () => {
  test('returns empty array if given empty array', () =>
    expect(removeDuplicates([])).toEqual([]));
  test('removes duplicate strings', () =>
    expect(removeDuplicates(['one', 'one', 'two'])).toEqual(['one', 'two']));
  test('removes duplicate strings, out of order', () =>
    expect(removeDuplicates(['one', 'two', 'one'])).toEqual(['one', 'two']));
});
