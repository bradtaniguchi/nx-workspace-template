import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgLoggerService } from './ng-logger.service';
import { CommonLoggerConfig } from '@nx-workspace-template/common';
import { NG_LOGGER_CONFIG } from './ng-logger-config';

@NgModule({
  imports: [CommonModule],
  providers: [NgLoggerService],
})
export class NgLoggerModule {
  /**
   * Setup configurations with the ng-logger-service
   */
  static forRoot(
    config: CommonLoggerConfig
  ): ModuleWithProviders<NgLoggerModule> {
    return {
      ngModule: NgLoggerModule,
      providers: [
        NgLoggerService,
        {
          provide: NG_LOGGER_CONFIG,
          useValue: config,
        },
      ],
    };
  }
}
