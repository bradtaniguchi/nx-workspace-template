import { InjectionToken } from '@angular/core';
import { ReplaySubject } from 'rxjs';

/**
 * Injection token of the observable fired when init scripts are loaded
 */
export const SCRIPT_LOADER_LOADED = new InjectionToken<ReplaySubject<boolean>>(
  'SCRIPT_LOADER_LOADED'
);
