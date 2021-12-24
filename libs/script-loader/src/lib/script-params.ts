export interface ScriptParams {
  src: string;
  async?: boolean;
  /**
   * Function to call BEFORE
   * the script is loaded
   */
  preLoad?: () => void;
  /**
   * Function to call after the script is loaded
   */
  callback?: () => void;
}
