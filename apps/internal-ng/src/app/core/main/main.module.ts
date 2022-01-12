import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ReactiveComponentModule } from '@ngrx/component';
import { MainComponent } from './main.component';
@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveComponentModule,
    // Angular Material
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
  ],
  exports: [MainComponent],
})
export class MainModule {}
