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

  create: createAction(
    `[${prefix}] Create`,
    props<{
      entity: Partial<TypeParams['doc']>;
    }>()
  ),
  createSuccess: createAction(
    `[${prefix}] Create Success`,
    props<{
      entity: TypeParams['doc'];
    }>()
  ),
  createFailed: createAction(
    `[${prefix}] Create Failed`,
    props<{
      err: unknown;
    }>()
  ),
  createCancel: createAction(`[${prefix}] Create Cancel`),

  // TODO:
});
