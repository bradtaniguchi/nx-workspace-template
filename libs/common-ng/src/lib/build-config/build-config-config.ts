import { InjectionToken } from '@angular/core';
import { BuildConfig } from './build-config';

/**
 * Token that represents the configuration of the "build-config" service.
 * Used to override the build config, and specify the path to the build config file.
 */
export const BUILD_CONFIG_CONFIG = new InjectionToken<BuildConfigConfig>(
  'BUILD_CONFIG_CONFIG'
);

/**
 * The build-config configuration. Can be used to provide overrides of
 * the config file, and customize the actual build-config service behavior.
 */
export type BuildConfigConfig =
  | BuildConfigWithPathConfig
  | BuildConfigWithoutPathConfig;

export interface BuildConfigWithPathConfig {
  /**
   * The path to the file. If given, then the file will be loaded from this path.
   */
  path: string;
  /**
   * Overrides that can be provided to customize the returned data.
   */
  overrides?: Partial<BuildConfig>;
}

export interface BuildConfigWithoutPathConfig {
  /**
   * Overrides that must be provided to defined the returne data.
   */
  overrides?: BuildConfig;
}

export const isBuildConfigWithPathConfig = (
  config: BuildConfigConfig
): config is BuildConfigWithPathConfig =>
  !!(config as BuildConfigWithPathConfig).path &&
  typeof (config as BuildConfigWithPathConfig).path === 'string';

export const isBuildConfigWithoutPathConfig = (
  config: BuildConfigConfig
): config is BuildConfigWithoutPathConfig =>
  !!(config as BuildConfigWithoutPathConfig).overrides &&
  typeof (config as BuildConfigWithoutPathConfig).overrides === 'object';
