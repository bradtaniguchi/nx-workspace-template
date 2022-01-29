import { InjectionToken } from '@angular/core';

/**
 * Injection token to access the local-forage instance. Which
 * will interface with local-storage or IndexedDB/web-sql
 */
export const LOCAL_FORAGE = new InjectionToken('LOCAL_FORAGE');
