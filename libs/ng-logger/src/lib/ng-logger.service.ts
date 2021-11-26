import { Inject, Injectable, Optional } from '@angular/core';
import { CommonLogger } from '@nx-workspace-template/common';
import { NgLoggerConfig, NG_LOGGER_CONFIG } from './ng-logger-config';

@Injectable({
  providedIn: 'root',
})
export class NgLoggerService extends CommonLogger {
  constructor(
    @Inject(NG_LOGGER_CONFIG) @Optional() public config: NgLoggerConfig
  ) {
    super(config);
  }
}
