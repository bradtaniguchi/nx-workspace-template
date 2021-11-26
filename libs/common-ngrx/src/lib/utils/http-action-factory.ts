import { createAction, props } from '@ngrx/store';
import { TypedAction, NotAllowedInPropsCheck } from '@ngrx/store/src/models';
import { HttpActions } from './http-actions';

/**
 * Utility function that returns 4 actions in an array
 * that can be used to create http request http actions.
 *
 * @see http-actions
 */
export const httpActionFactory = <
  RequestProps,
  ResponseProps = Record<string, unknown>,
  ErrorProps = Record<string, unknown>
>(
  actionType: string
): HttpActions<RequestProps, ResponseProps, ErrorProps> => [
  // createAction(actionType, (props) => props),
];

// {
//   req: ActionCreator<
//     string,
//     (props?: RequestPayload) => {
//       payload: RequestPayload;
//     } & TypedAction<string>
//   >;
//   success: ActionCreator<
//     string,
//     (props?: ResponsePayload) => {
//       payload: ResponsePayload;
//     } & TypedAction<string>
//   >;
//   failed: ActionCreator<
//     string,
//     (props?: ErrorPayload) => {
//       payload: ErrorPayload;
//     } & TypedAction<string>
//   >;
// } => ({
//   req: createAction(actionType, (payload: RequestPayload) => ({ payload })),
//   success: createAction(
//     `${actionType}_SUCCESS`,
//     (payload?: ResponsePayload) => ({
//       payload,
//     })
//   ),
//   failed: createAction(`${actionType}_FAILED`, (payload: ErrorPayload) => ({
//     payload,
//   })),
// });
