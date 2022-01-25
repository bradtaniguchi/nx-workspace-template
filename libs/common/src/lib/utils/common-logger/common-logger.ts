import { CommonLoggerConfig } from './common-logger-config';
/**
 * Simple but configurable logger. Should be used on the client-side
 * and script situations
 */
export class CommonLogger {
  /**
   * The list of hidden methods, defined from the config object.
   */
  public get hidden(): Array<'log' | 'debug' | 'warn' | 'error'> {
    return this.config?.hidden || [];
  }

  /**
   * @param config - configuration object
   */
  constructor(public config?: CommonLoggerConfig) {}

  error(message?: unknown, ...optionalParams: unknown[]): void {
    if (this.hidden?.includes('error')) return;
    console.error(message, ...optionalParams);
  }

  log(message?: unknown, ...optionalParams: unknown[]): void {
    if (this.hidden?.includes('log')) return;
    console.log(message, ...optionalParams);
  }

  debug(message?: unknown, ...optionalParams: unknown[]): void {
    if (this.hidden?.includes('debug')) return;
    console.debug(message, ...optionalParams);
  }

  warn(message?: unknown, ...optionalParams: unknown[]): void {
    if (this.hidden?.includes('warn')) return;
    console.warn(message, ...optionalParams);
  }
}
