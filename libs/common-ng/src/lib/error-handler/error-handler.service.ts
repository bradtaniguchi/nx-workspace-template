import { Injectable } from '@angular/core';

/**
 * A generic service that can "handle errors", by logging
 * them into other systems. This service should be used as often
 * as the logger service, however, this service will do
 * something beyond log it in the console.
 *
 * Initially the service doesn't do anything. This should be changed
 * according to the project configuration.
 */
@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  /**
   * Will attempt to serialize the error into an object that can be a string.
   * If this fails, we return null.
   */
  public serialize(err: unknown): unknown {
    try {
      return JSON.parse(JSON.stringify(err, Object.getOwnPropertyNames(err)));
    } catch (err) {
      return null;
    }
  }

  /**
   * Handles the error accordingly
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public handle(err: unknown): void {
    // TODO:
  }
}
