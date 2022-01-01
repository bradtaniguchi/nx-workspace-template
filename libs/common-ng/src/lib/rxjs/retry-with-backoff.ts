import { HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, retryWhen } from 'rxjs/operators';

/**
 * Taken from:
 * https://medium.com/angular-in-depth/retry-failed-http-requests-in-angular-f5959d486294
 *
 * Retry with exponential back-off.
 * Defaults
 */
export function retryWithBackOff(params?: {
  /**
   * The list of codes TO try for.
   */
  only: number[];
  /**
   * The initial delay (?)
   * Defaults to 1000ms
   */
  delayMs?: number;
  /**
   * The max number of retires to attempt, defaults to 3
   */
  maxRetry?: number;
  /**
   * The number of ms increased between each back-off, defaults to 1000ms
   */
  backOffMs?: number;
}) {
  const {
    only = [],
    delayMs = 1000,
    maxRetry = 3,
    backOffMs = 1000,
  } = params || {};
  let retries = maxRetry;
  return (src: Observable<HttpEvent<unknown>>) =>
    src.pipe(
      retryWhen((err: Observable<HttpErrorResponse>) =>
        err.pipe(
          mergeMap((err) => {
            if (err.status && !only.includes(err.status))
              return throwError(() => err);

            if (retries-- > 0)
              return of(err).pipe(
                delay(delayMs + (maxRetry - retries) * backOffMs)
              );

            return throwError(() => err);
          })
        )
      )
    );
}
