/**
 * "Wrapper type", used to define
 * the types for the `htt-action-factory`.
 *
 * **note** the types are non-optimal, but for
 * the user-facing scheme it should work.
 */
export interface HttpActionTypeParams<
  RequestPayload extends unknown = unknown,
  SuccessPaylod extends unknown = unknown,
  FailurePayload extends unknown = unknown,
  CancelPayload extends unknown = unknown
> {
  request: RequestPayload;
  success: SuccessPaylod;
  failure: FailurePayload;
  cancel: CancelPayload;
}
