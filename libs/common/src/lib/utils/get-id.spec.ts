import { DocumentId } from '../models/id-document';
import { getId } from './get-id';

describe('getId', () => {
  test('returns empty string if given falsy', () => expect(getId('')).toBe(''));
  test('returns document-id', () =>
    expect(getId('document-id')).toBe(DocumentId('document-id')));
  test('returns returns nested document-id', () =>
    expect(
      getId({
        id: DocumentId('document-id'),
      })
    ).toBe(DocumentId('document-id')));
});
