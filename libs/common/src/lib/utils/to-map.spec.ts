import { DocumentId, DocumentWithId } from '../models/id-document';
import { toMap } from './to-map';
describe('toMap', () => {
  test('returns empty object if given empty array', () =>
    expect(toMap([], 'id')).toEqual({}));
  test('returns object with key-values, with default key of "id"', () =>
    expect(
      toMap([
        {
          id: DocumentId('id1'),
        },
        {
          id: DocumentId('id2'),
        },
        {
          id: DocumentId('id3'),
        },
      ])
    ).toEqual({
      [DocumentId('id1')]: {
        id: DocumentId('id1'),
      },
      [DocumentId('id2')]: {
        id: DocumentId('id2'),
      },
      [DocumentId('id3')]: {
        id: DocumentId('id3'),
      },
    }));
  test('returns object with key-values, with alternate key', () => {
    type CustomObject = DocumentWithId & {
      otherId: string;
    };
    const entities: Array<CustomObject> = [
      {
        id: DocumentId('id1'),
        otherId: 'otherId1',
      },
      {
        id: DocumentId('id2'),
        otherId: 'otherId2',
      },
    ];
    expect(toMap(entities, 'otherId')).toEqual({
      otherId1: {
        id: DocumentId('id1'),
        otherId: 'otherId1',
      },
      otherId2: {
        id: DocumentId('id2'),
        otherId: 'otherId2',
      },
    });
  });
  test('returns object with key-values, and overrides', () => {
    const entities: Array<DocumentWithId> = [
      {
        id: DocumentId('id1'),
      },
      {
        id: DocumentId('id1'),
      },
    ];
    expect(toMap(entities)).toEqual({
      id1: {
        id: DocumentId('id1'),
      },
    });
  });
  test('returns object with key-values, without branded type assumption', () => {
    const entities: Array<{ id: string }> = [
      {
        id: 'id1',
      },
      {
        id: 'id2',
      },
    ];
    expect(toMap(entities)).toEqual({
      id1: {
        id: 'id1',
      },
      id2: {
        id: 'id2',
      },
    });
  });
});
