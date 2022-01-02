export interface HttpLoadingState {
  /**
   * If an http request is loading or not.
   */
  loading?: boolean;
  /**
   * Flag that can be set to **force** loading to always be false.
   */
  disabled?: boolean;
}
