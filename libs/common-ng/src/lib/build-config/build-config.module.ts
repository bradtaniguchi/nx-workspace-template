import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BuildConfigService } from './build-config.service';
import { BuildConfigConfig, BUILD_CONFIG_CONFIG } from '.';

@NgModule({
  imports: [HttpClientModule],
})
export class BuildConfigModule {
  /**
   * Setup configurations with the build-config-service.
   */
  static forRoot(
    config: BuildConfigConfig
  ): ModuleWithProviders<BuildConfigModule> {
    return {
      ngModule: BuildConfigModule,
      providers: [
        BuildConfigService,
        {
          provide: BUILD_CONFIG_CONFIG,
          useValue: config,
        },
      ],
    };
  }
}
