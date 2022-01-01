import { InjectionToken } from '@angular/core';
import { CommonLoggerConfig } from '@nx-workspace-template/common';

export const NG_LOGGER_CONFIG = new InjectionToken<NgLoggerConfig>(
  'NG_LOGGER_CONFIG'
);
export type NgLoggerConfig = CommonLoggerConfig;
