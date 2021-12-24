import { NgModule, ModuleWithProviders } from '@angular/core';
import { ScriptLoaderService } from './script-loader.service';
import { ScriptParams } from './script-params';
import { SCRIPT_LOADER_INIT_SCRIPTS } from './script-loader-init-scripts';
import { SCRIPT_LOADER_LOADED } from './script-loader-loaded';
import { ReplaySubject } from 'rxjs';

@NgModule({
  providers: [
    ScriptLoaderService,
    {
      provide: SCRIPT_LOADER_LOADED,
      useValue: new ReplaySubject(1),
    },
  ],
})
export class ScriptLoaderModule {
  // **note** this is injected so the script loader service is setup, but handles everything internally
  constructor(private scriptLoaderService: ScriptLoaderService) {}
  public static forRoot(params?: {
    /**
     * Scripts to load automatically.
     */
    scripts?: ScriptParams[];
  }): ModuleWithProviders<ScriptLoaderModule> {
    return {
      ngModule: ScriptLoaderModule,
      providers: [
        ScriptLoaderService,
        // setup init scripts, if given
        params && params.scripts
          ? {
              provide: SCRIPT_LOADER_INIT_SCRIPTS,
              useValue: {
                scripts: params.scripts,
              },
            }
          : [],
        // loaded event emitter, if there is one
        {
          provide: SCRIPT_LOADER_LOADED,
          useValue: new ReplaySubject<boolean>(1),
        },
      ],
    };
  }
}
