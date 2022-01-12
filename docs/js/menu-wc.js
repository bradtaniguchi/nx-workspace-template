'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nx-workspace-template documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-44965247fd18301ec3d0ea2a9f0598fd"' : 'data-target="#xs-components-links-module-AppModule-44965247fd18301ec3d0ea2a9f0598fd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-44965247fd18301ec3d0ea2a9f0598fd"' :
                                            'id="xs-components-links-module-AppModule-44965247fd18301ec3d0ea2a9f0598fd"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BuildConfigModule.html" data-type="entity-link" >BuildConfigModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CommonNgrxModule.html" data-type="entity-link" >CommonNgrxModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-f4c23784f500b5615547ceefb664a589"' : 'data-target="#xs-components-links-module-DashboardModule-f4c23784f500b5615547ceefb664a589"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-f4c23784f500b5615547ceefb664a589"' :
                                            'id="xs-components-links-module-DashboardModule-f4c23784f500b5615547ceefb664a589"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MainModule.html" data-type="entity-link" >MainModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MainModule-54d7ff9a70c3d83a335cce9d29257601"' : 'data-target="#xs-components-links-module-MainModule-54d7ff9a70c3d83a335cce9d29257601"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MainModule-54d7ff9a70c3d83a335cce9d29257601"' :
                                            'id="xs-components-links-module-MainModule-54d7ff9a70c3d83a335cce9d29257601"' }>
                                            <li class="link">
                                                <a href="components/MainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NgLoggerModule.html" data-type="entity-link" >NgLoggerModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-NgLoggerModule-9812604632f65fbe5ab6f3a8d3a3111c"' : 'data-target="#xs-injectables-links-module-NgLoggerModule-9812604632f65fbe5ab6f3a8d3a3111c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NgLoggerModule-9812604632f65fbe5ab6f3a8d3a3111c"' :
                                        'id="xs-injectables-links-module-NgLoggerModule-9812604632f65fbe5ab6f3a8d3a3111c"' }>
                                        <li class="link">
                                            <a href="injectables/NgLoggerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgLoggerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ScriptLoaderModule.html" data-type="entity-link" >ScriptLoaderModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ScriptLoaderModule-10c8c364a56cdd92dc7b0f9a1021d0c2"' : 'data-target="#xs-injectables-links-module-ScriptLoaderModule-10c8c364a56cdd92dc7b0f9a1021d0c2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ScriptLoaderModule-10c8c364a56cdd92dc7b0f9a1021d0c2"' :
                                        'id="xs-injectables-links-module-ScriptLoaderModule-10c8c364a56cdd92dc7b0f9a1021d0c2"' }>
                                        <li class="link">
                                            <a href="injectables/ScriptLoaderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScriptLoaderService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CommonLogger.html" data-type="entity-link" >CommonLogger</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/BuildConfigService.html" data-type="entity-link" >BuildConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GlobalErrorHandler.html" data-type="entity-link" >GlobalErrorHandler</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpLoadingStateService.html" data-type="entity-link" >HttpLoadingStateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RouteLoadingStateService.html" data-type="entity-link" >RouteLoadingStateService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/HttpLoadingInterceptor.html" data-type="entity-link" >HttpLoadingInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/CanDeactivateGuard.html" data-type="entity-link" >CanDeactivateGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/BuildConfig.html" data-type="entity-link" >BuildConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BuildConfigWithoutPathConfig.html" data-type="entity-link" >BuildConfigWithoutPathConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BuildConfigWithPathConfig.html" data-type="entity-link" >BuildConfigWithPathConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CommonLoggerConfig.html" data-type="entity-link" >CommonLoggerConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DateDocument.html" data-type="entity-link" >DateDocument</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeactivatableComponent.html" data-type="entity-link" >DeactivatableComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DocumentWithId.html" data-type="entity-link" >DocumentWithId</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EntityTypeParams.html" data-type="entity-link" >EntityTypeParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HttpActionTypeParams.html" data-type="entity-link" >HttpActionTypeParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HttpLoadingState.html" data-type="entity-link" >HttpLoadingState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RouteLoadingState.html" data-type="entity-link" >RouteLoadingState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ScriptLoaderInitScripts.html" data-type="entity-link" >ScriptLoaderInitScripts</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ScriptParams.html" data-type="entity-link" >ScriptParams</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});