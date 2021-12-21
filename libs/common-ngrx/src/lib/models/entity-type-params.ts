import { DocumentWithId } from '@nx-workspace-template/common';

/**
 * This type is used to wrap type-params for all entity
 * utilities. This is to cutdown on the amount of
 * generics that need to be passed around
 */
export interface EntityTypeParams<
  Prefix extends string = string,
  DocId extends string = string,
  Doc extends DocumentWithId<DocId> = Record<string, unknown> & { id: DocId }
> {
  /**
   * The prefix string, usually TITLE_CASE
   */
  prefix: Prefix;
  /**
   * The type of the document
   */
  doc: Doc;
  /**
   * The type of the document-id
   */
  docId: DocId;
}
