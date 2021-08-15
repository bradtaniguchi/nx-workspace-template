/**
 * Generic document-id. Used for generic testing and documents.
 * You shouldn't use this directly, instead use
 * branded types.
 *
 * This is also a TS-level feature
 */
export type DocumentId = string & { readonly brand: unique symbol };
export const DocumentId = <T extends DocumentId>(documentId: string): T =>
  documentId as T;

export interface DocumentWithId<T = DocumentId> {
  id: T;
}

/**
 * Is a document with an id
 */
export const isDocumentWithId = <T extends DocumentId>(
  doc: DocumentWithId<T> | unknown
): doc is DocumentWithId<T> =>
  typeof doc === 'object' &&
  doc !== null &&
  (doc as DocumentWithId<T>).id !== undefined;
