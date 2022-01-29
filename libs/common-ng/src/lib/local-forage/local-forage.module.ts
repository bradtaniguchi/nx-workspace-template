import { ModuleWithProviders, NgModule } from '@angular/core';
import localforage from 'localforage';
import { from } from 'rxjs';
import { LOCAL_FORAGE } from './local-forage';
import { LOCAL_FORAGE_READY } from './local-forage-ready';

@NgModule({
  imports: [],
})
export class LocalForageModule {
  /**
   * Setup configurations with the build-config-service.
   */
  static forRoot(
    config: LocalForageOptions
  ): ModuleWithProviders<LocalForageModule> {
    localforage.config(config);

    return {
      ngModule: LocalForageModule,
      providers: [
        {
          provide: LOCAL_FORAGE,
          useValue: localforage,
        },
        {
          provide: LOCAL_FORAGE_READY,
          useValue: from(localforage.ready()),
        },
      ],
    };
  }
}
