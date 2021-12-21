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
};
