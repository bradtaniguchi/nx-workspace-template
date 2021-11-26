import { DocumentId, DocumentWithId } from '@nx-workspace-template/common';
import { httpActionFactory } from '../utils/http-action-factory';

/**
 * Returns a list of common "http" actions
 * @params prefix - the prefix of the action, usually TITLE_CASE:
 * `ENTITY_NAME`
 */
export const entityActionFactory = <
  Doc extends DocumentWithId<DocId>,
  DocId extends string
>(
  prefix: string
) => {};

// ({
//   /**
//    * Http actions to get a single get action
//    */
//   get: entityHttpActionFactory<
//     {
//       id: DocumentKey;
//     },
//     {
//       entity: Document;
//     }
//   >(`[${prefix}] GET`),

//   /**
//    * Http actions to list **all** entities of this type.
//    */
//   list: entityHttpActionFactory<
//     {
//       query: QueryList<Document>;
//     },
//     {
//       entities: Document[];
//     }
//   >(`[${prefix}] LIST`),

//   /**
//    * Http action to create an entity
//    */
//   create: entityHttpActionFactory<
//     {
//       entity: Document;
//     },
//     { entity: Document }
//   >(`[${prefix}] CREATE`),

//   /**
//    * Http actions to update a given entity
//    */
//   update: entityHttpActionFactory<
//     {
//       entity: Document;
//     },
//     {
//       entity: Document;
//     }
//   >(`[${prefix}] UPDATE`),

//   /**
//    * Http actions to update multiple entities
//    *
//    * TODO: might change types
//    */
//   updateMultiple: entityHttpActionFactory<
//     {
//       entities: Document[];
//     },
//     {
//       entities: Document[];
//     }
//   >(`[${prefix}] UPDATE`),

//   /**
//    * Http actions to remove a single entity
//    */
//   remove: entityHttpActionFactory<
//     { id: DocumentKey },
//     {
//       entity: Document;
//     }
//   >(`[${prefix}] REMOVE`),
// });
