import { InjectionToken } from '@angular/core';
import { ScriptParams } from './script-params';

export interface ScriptLoaderInitScripts {
  scripts: ScriptParams[];
}
export const SCRIPT_LOADER_INIT_SCRIPTS =
  new InjectionToken<ScriptLoaderInitScripts>('SCRIPT_LOADER_INIT_SCRIPTS');
