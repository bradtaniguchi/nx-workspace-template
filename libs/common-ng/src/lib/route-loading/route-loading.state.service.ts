import { Injectable } from '@angular/core';
import {
  GuardsCheckEnd,
  NavigationEnd,
  NavigationStart,
  Router,
} from '@angular/router';
import { ComponentStore } from '@ngrx/component-store';
import { filter, map } from 'rxjs';
import { RouteLoadingState } from './route-loading.state';

@Injectable({
  providedIn: 'root',
})
export class RouteLoadingStateService extends ComponentStore<RouteLoadingState> {
  /**
   * If the navigation is loading or not.
   */
  public readonly loading$ = this.select((state) => state.loading);

  constructor(private router: Router) {
    super({});
    this.router.events
      .pipe(
        map((event) => {
          if (event instanceof NavigationStart) return true;
          if (event instanceof NavigationEnd) return false;
          if (event instanceof GuardsCheckEnd) return false;

          // Null is a special value to prevent emissions of extra changes
          return null;
        }),
        filter((loading) => loading !== null)
      )
      .subscribe((loading) => this.setLoading(!!loading));
  }

  public readonly setDisabled = this.updater((state, disabled: boolean) => ({
    ...state,
    disabled,
  }));

  public readonly setLoading = this.updater((state, loading: boolean) => ({
    ...state,
    loading,
  }));
}
