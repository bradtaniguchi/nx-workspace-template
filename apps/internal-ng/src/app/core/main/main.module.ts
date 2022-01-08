import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [MainComponent],
  imports: [
    RouterModule,
    // Angular Material
    MatToolbarModule,
  ],
  exports: [MainComponent],
})
export class MainModule {}
