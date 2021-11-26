import { FunctionWithParametersType } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

/**
 * The list of 4 actions that are returned from the `http-action-factory`
 * function.
 *
 * The 4 actions go as followed:
 * - request
 * - success-response
 * - error-response
 * - cancel-request
 *
 * @see http-action-factory
 */
export type HttpActions<
  RequestProps,
  ResponseProps = Record<string, unknown>,
  ErrorProps = Record<string, unknown>
> = [
  // FunctionWithParametersType<
//   [RequestProps],
//   RequestProps & TypedAction<string>
// > &
//   TypedAction<string>
];

// ActionCreator<
//     string,
//     (props: RequestProps) => RequestProps & TypedAction<string>
//   >

// testing
// const [request] = [] as any as HttpActions<{
//   name: string;
// }>;

// request({ name: 'test' });

// set: FunctionWithParametersType<
//     [{ entity: Document }],
//     { entity: Document } & TypedAction<`[${Prefix}] SET`>
//   > &
//     TypedAction<`[${Prefix}] SET`>;
