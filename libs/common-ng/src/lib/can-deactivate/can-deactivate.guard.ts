import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { DeactivatableComponent } from './deactivatable-component';

@Injectable({
  providedIn: 'root',
})
export class CanDeactivateGuard
  implements CanDeactivate<DeactivatableComponent>
{
  private isdeactivatable(
    component: unknown
  ): component is DeactivatableComponent {
    return (
      !!component &&
      typeof component === 'object' &&
      (component as DeactivatableComponent).canDeactivate &&
      typeof (component as DeactivatableComponent).canDeactivate === 'function'
    );
  }

  /**
   * Returns if the component can be deactivated, or navigated away from by the user.
   *
   * If the component does not have the `canDeactivate` method, then it automatically
   * will return true
   */
  canDeactivate(
    component: DeactivatableComponent | unknown
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.isdeactivatable(component) ? component.canDeactivate() : true;
  }
}
