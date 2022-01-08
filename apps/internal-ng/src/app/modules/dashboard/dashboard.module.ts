import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    // Angular Material
    MatButtonModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
