import { Observable } from 'rxjs';

/**
 * For component classes that work with the `CanDeactivate` guard, which will
 * prevent a user from navigating away from a page.
 */
export interface DeactivatableComponent {
  /**
   * If the user can navigate away from the page, then
   * return a true value.
   */
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean;
}
