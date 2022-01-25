import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BuildConfigModule } from '@nx-workspace-template/common-ng';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { MainComponent } from './core/main/main.component';
import { MainModule } from './core/main/main.module';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: MainComponent,
          children: [
            {
              path: '',
              pathMatch: 'full',
              component: DashboardComponent,
            },
          ],
        },
        {
          // TODO: add "404 route"
          path: '**',
          redirectTo: '',
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),

    // Core modules
    MainModule,
    // Nested non-lazy loaded modules
    DashboardModule,

    // Global/injection modules
    BuildConfigModule.forRoot(
      environment.production
        ? {
            path: './build-config.json',
          }
        : {
            overrides: {
              angularVersion: '0.0.0',
              date: new Date().toISOString(),
              revision: '0.0.0',
            },
          }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
