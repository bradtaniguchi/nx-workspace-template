import {
  DocumentId,
  DocumentWithId,
  isDocumentWithId,
} from '../models/id-document';

/**
 * Utility function to get id information
 * **note** assumes the id of the document is
 *
 */
export const getId = <T extends DocumentId>(
  id: string | DocumentId | DocumentWithId<T>
): T | '' => {
  if (!id) {
    return '';
  }
  if (typeof id === 'string') {
    return DocumentId<T>(id);
  }
  if (isDocumentWithId(id)) {
    return DocumentId<T>(id.id);
  }

  return '';
};
