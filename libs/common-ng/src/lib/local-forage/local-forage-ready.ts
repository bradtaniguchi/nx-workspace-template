import { InjectionToken } from '@angular/core';

/**
 * Injection token to access the local-forage-ready observable. This will
 * be an observable that emits when local-forage is ready to use.
 */
export const LOCAL_FORAGE_READY = new InjectionToken('LOCAL_FORAGE_READY');
