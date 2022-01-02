export interface RouteLoadingState {
  /**
   * If navigation is loading or not.
   */
  loading?: boolean;
  /**
   * Flag that can be set to **force** loading to always be false.
   */
  disabled?: boolean;
}
