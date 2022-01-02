import { InjectionToken } from '@angular/core';

export const BUILD_CONFIG = new InjectionToken<BuildConfig>('NG_CONFIG');

/**
 * Type that represents the output of the `build-config.js` tooling script.
 * This script can be used in multiple of situations, but generally is used
 * to provide the client-side information on the current asset build, to help
 * debug caching issues and provide context.
 */
export interface BuildConfig extends Record<string, unknown> {
  /**
   * The git hash of this build.
   */
  revision: string;
  /**
   * The version of Angular. It is assumed all dependencies are also
   * the same version.
   */
  angularVersion: string;
  /**
   * The time-stap of the latest build.
   */
  date: string;
}
