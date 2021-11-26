type LogLevels = 'log' | 'debug' | 'warn' | 'error';
/**
 * Configuration object for the common-logger.
 */
export interface CommonLoggerConfig {
  /**
   * List of hidden methods for the common-logger.
   */
  hidden?: Array<LogLevels>;

  /**
   * Function that can be passed to "hook" into the emittions of logs
   * over time.
   *
   */
  onLog?: (params: {
    /**
     * The level called
     */
    level: LogLevels;
    /**
     * The message given, usually a string
     */
    message: unknown;
    /**
     * The optional params given
     */
    optionalParams: Array<unknown>;
  }) => void;
}
