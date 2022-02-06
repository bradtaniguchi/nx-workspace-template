import { State } from '@ngrx/store';

/**
 * Manually sets the loading for the state.
 * Slightly easier to apply than the traditional spread with loading.
 */
export const setLoading = <State extends { loading?: boolean }>(
  state: State,
  loading?: boolean
) => ({ ...state, loading: !!loading });

/**
 * Sets the loading to true.
 * Easier to apply than the traditional spread with loading.
 */
export const setLoadingTrue = <State extends { loading?: boolean }>(
  state: State
) => ({ ...state, loading: true });

/**
 * Sets the loading to false.
 * Easier to apply than the traditional spread with loading.
 */
export const setLoadingFalse = <State extends { loading?: boolean }>(
  state: State
) => ({ ...state, loading: false });
