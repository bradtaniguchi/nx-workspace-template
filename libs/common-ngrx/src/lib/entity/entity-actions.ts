import { FunctionWithParametersType } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { EntityTypeParams } from '../models/entity-type-params';

export type EntityActions<TypeParams extends EntityTypeParams> = {
  get: FunctionWithParametersType<
    [
      {
        id: TypeParams['docId'];
        reload?: boolean;
      }
    ]
  > &
    TypedAction<`[${TypeParams['prefix']}] Get`>;
  getSuccess: FunctionWithParametersType<
    [
      {
        entity: TypeParams['doc'];
      }
    ]
  > &
    TypedAction<`[${TypeParams['prefix']}] Get Success`>;

  getFailed: FunctionWithParametersType<[{ err: unknown }]> &
    TypedAction<`[${TypeParams['prefix']}] Get Failed`>;

  getCancel: FunctionWithParametersType<[]> &
    TypedAction<`[${TypeParams['prefix']}] Get Cancel`>;

  // CREATE
  create: FunctionWithParametersType<
    [
      {
        entity: Partial<TypeParams['doc']>;
      }
    ]
  > &
    TypedAction<`[${TypeParams['prefix']}] Create`>;

  createSuccess: FunctionWithParametersType<
    [
      {
        entity: TypeParams['doc'];
      }
    ]
  > &
    TypedAction<`[${TypeParams['prefix']}] Create Success`>;

  createFailed: FunctionWithParametersType<[{ err: unknown }]> &
    TypedAction<`[${TypeParams['prefix']}] Create Failed`>;

  createCancel: FunctionWithParametersType<[]> &
    TypedAction<`[${TypeParams['prefix']}] Create Cancel`>;

  // UPDATE
  update: FunctionWithParametersType<
    [
      {
        entity: TypeParams['doc'];
      }
    ]
  > &
    TypedAction<`[${TypeParams['prefix']}] Update`>;

  updateSuccess: FunctionWithParametersType<
    [
      {
        entity: TypeParams['doc'];
      }
    ]
  > &
    TypedAction<`[${TypeParams['prefix']}] Update Success`>;

  updateFailed: FunctionWithParametersType<[{ err: unknown }]> &
    TypedAction<`[${TypeParams['prefix']}] Update Failed`>;

  updateCancel: FunctionWithParametersType<[]> &
    TypedAction<`[${TypeParams['prefix']}] Update Cancel`>;

  // DELETE
  delete: FunctionWithParametersType<
    [
      {
        id: TypeParams['docId'];
      }
    ]
  > &
    TypedAction<`[${TypeParams['prefix']}] Delete`>;

  deleteSuccess: FunctionWithParametersType<
    [
      {
        id: TypeParams['docId'];
      }
    ]
  > &
    TypedAction<`[${TypeParams['prefix']}] Delete Success`>;

  deleteFailed: FunctionWithParametersType<[{ err: unknown }]> &
    TypedAction<`[${TypeParams['prefix']}] Delete Failed`>;

  deleteCancel: FunctionWithParametersType<[]> &
    TypedAction<`[${TypeParams['prefix']}] Delete Cancel`>;
};
