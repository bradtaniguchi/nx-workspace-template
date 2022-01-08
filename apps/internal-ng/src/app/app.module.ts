import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
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

    // core modules
    MainModule,
    // nested non-lazy loaded modules
    DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
