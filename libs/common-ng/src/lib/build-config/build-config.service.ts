import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { of, shareReplay } from 'rxjs';
import { BuildConfig } from './build-config';
import {
  BuildConfigConfig,
  BUILD_CONFIG_CONFIG,
  isBuildConfigWithoutPathConfig,
  isBuildConfigWithPathConfig,
} from './build-config-config';

/**
 * Provides an interface to gather the build config
 * from the BUILD_CONFIG_PATH injectable.
 * By default it is assumed to be just at `config.json`
 * within the root public folder.
 */
@Injectable()
export class BuildConfigService {
  /**
   * The build config file contents. Will be cached after the initial call.
   */
  public buildConfig$ = (() => {
    if (isBuildConfigWithPathConfig(this.config))
      return this.http
        .get<BuildConfig>(this.config.path)
        .pipe(shareReplay({ bufferSize: 1, refCount: true }));
    if (isBuildConfigWithoutPathConfig(this.config))
      return of(this.config.overrides);
    throw new Error(
      `Invalid build config configuration: ${JSON.stringify(this.config)}`
    );
  })();

  constructor(
    private readonly http: HttpClient,
    @Inject(BUILD_CONFIG_CONFIG) private readonly config: BuildConfigConfig
  ) {}
}
