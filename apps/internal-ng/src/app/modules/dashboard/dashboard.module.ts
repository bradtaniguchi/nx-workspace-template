import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './dashboard.component';
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    // Angular Material
    GridModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
