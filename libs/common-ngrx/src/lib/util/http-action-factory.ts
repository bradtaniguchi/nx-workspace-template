/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAction, props } from '@ngrx/store';
import {
  FunctionWithParametersType,
  TypedAction,
} from '@ngrx/store/src/models';
import { EntityTypeParams } from '../models/entity-type-params';
import { HttpActionTypeParams } from './http-action-type-params';

/**
 * Function that that returns 4 actions.
 * 1. "request" action
 * 2. "success" action
 * 3. "Failed" action
 * 4. "cancel" action
 *
 * These 4 can be used to create other ngrx actions flows, and aren't only
 * isolated to just HTTP requests.
 */
export const httpActionFactory = <
  TypeParams extends EntityTypeParams,
  ActionTypeParams extends HttpActionTypeParams,
  Action extends string = string
>({
  prefix,
  action,
}: {
  prefix: TypeParams['prefix'];
  action: Action;
}): [
  FunctionWithParametersType<[ActionTypeParams['request']]> &
    TypedAction<`[${TypeParams['prefix']}] ${typeof action} Request`>,
  FunctionWithParametersType<[ActionTypeParams['success']?]> &
    TypedAction<`[${TypeParams['prefix']}] ${typeof action} Success`>,
  FunctionWithParametersType<[ActionTypeParams['failure']?]> &
    TypedAction<`[${TypeParams['prefix']}] ${typeof action} Failed`>,
  FunctionWithParametersType<[ActionTypeParams['cancel']?]> &
    TypedAction<`[${TypeParams['prefix']}] ${typeof action} Cancel`>
] => [
  createAction(`[${prefix}] ${action} Request`, props<any>()),
  createAction(`[${prefix}] ${action} Success`, props<any>()),
  createAction(`[${prefix}] ${action} Failed`, props<any>()),
  createAction(`[${prefix}] ${action} Cancel`, props<any>()),
];
