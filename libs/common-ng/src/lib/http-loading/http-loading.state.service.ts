import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { HttpLoadingState } from './http-loading.state';

@Injectable({
  providedIn: 'root',
})
export class HttpLoadingStateService extends ComponentStore<HttpLoadingState> {
  /**
   * If the http request is loading or not.
   */
  public readonly loading$ = this.select((state) =>
    state.disabled ? false : !!state.loading
  );

  constructor() {
    super({});
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
