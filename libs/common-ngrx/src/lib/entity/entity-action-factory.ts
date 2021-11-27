import { createAction, props } from '@ngrx/store';
import { EntityTypeParams } from '../models/entity-type-params';
import { EntityActions } from './entity-actions';

/**
 * Returns a list of common actions for an entity.
 */
export const entityActionFactory = <TypeParams extends EntityTypeParams>(
  prefix: TypeParams['prefix']
): EntityActions<TypeParams> => ({
  get: createAction(
    `[${prefix}] Get`,
    props<{
      id: TypeParams['docId'];
      reload?: boolean;
    }>()
  ),
  getSuccess: createAction(
    `[${prefix}] Get Success`,
    props<{
      entity: TypeParams['doc'];
    }>()
  ),
  getFailed: createAction(
    `[${prefix}] Get Failed`,
    props<{
      err: unknown;
    }>()
  ),
  getCancel: createAction(`[${prefix}] Get Cancel`),

  // TODO:
});

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
