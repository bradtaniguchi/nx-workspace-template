import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import {
  ScriptLoaderInitScripts,
  SCRIPT_LOADER_INIT_SCRIPTS,
} from './script-loader-init-scripts';
import { SCRIPT_LOADER_LOADED } from './script-loader-loaded';
import { ScriptParams } from './script-params';

@Injectable()
export class ScriptLoaderService {
  /**
   * List of scripts already loaded
   */
  public scriptsLoaded$ = new BehaviorSubject<
    Array<{
      src: string;
      element: HTMLScriptElement;
    }>
  >([]);
  constructor(
    @Inject(DOCUMENT) private document: Document,

    @Inject(SCRIPT_LOADER_LOADED)
    scriptLoaderLoaded: ReplaySubject<boolean>,

    @Inject(SCRIPT_LOADER_INIT_SCRIPTS)
    @Optional()
    initScripts: ScriptLoaderInitScripts
  ) {
    if (initScripts) {
      this.loadScripts(initScripts).then(() => scriptLoaderLoaded.next(true));
    } else {
      scriptLoaderLoaded.next(true);
    }
  }
  /**
   * Loads the list of scripts.
   * **Does not currently check to see if they are already loaded!**
   */
  public async loadScripts(params: {
    /**
     * The list of script sources
     */
    scripts: ScriptParams[];
  }): Promise<HTMLScriptElement[]> {
    const { scripts } = params;
    if (!scripts) {
      return [];
    }
    return Promise.all(scripts.map((script) => this.load(script)));
  }
  /**
   * Loads the individual scripts
   */
  private async load(script: ScriptParams): Promise<HTMLScriptElement> {
    const { src, async, preLoad, callback } = script;
    const existingScriptLoaded = this.scriptsLoaded$.value.find(
      (scriptsLoaded) => scriptsLoaded.src === src
    );
    if (existingScriptLoaded) {
      // if the script is already loaded, skip it;
      return existingScriptLoaded.element;
    }
    // otherwise, create and add it
    const scriptElement = this.document.createElement('script');
    this.scriptsLoaded$.next([
      ...this.scriptsLoaded$.value,
      {
        element: scriptElement,
        src,
      },
    ]);
    if (typeof preLoad === 'function') {
      preLoad();
    }
    scriptElement.setAttribute('src', src);
    scriptElement.setAttribute('async', '' + async);
    const head = this.document.getElementsByTagName('head')[0];
    const promise = new Promise((resolve) => (scriptElement.onload = resolve));
    head.appendChild(scriptElement);
    return promise
      .then(() => {
        if (typeof callback === 'function') {
          callback();
        }
        return;
      })
      .then(() => scriptElement);
  }
}
