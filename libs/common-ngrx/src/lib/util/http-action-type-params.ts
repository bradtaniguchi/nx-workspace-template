/**
 * "Wrapper type", used to define
 * the types for the `htt-action-factory`.
 *
 * **note** the types are non-optimal, but for
 * the user-facing scheme it should work.
 */
export interface HttpActionTypeParams<
  RequestPayload = unknown,
  SuccessPayload = unknown,
  FailurePayload = unknown,
  CancelPayload = unknown
> {
  request: RequestPayload;
  success: SuccessPayload;
  failure: FailurePayload;
  cancel: CancelPayload;
}
