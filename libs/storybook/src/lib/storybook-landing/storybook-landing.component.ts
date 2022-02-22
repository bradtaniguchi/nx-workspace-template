import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'nx-workspace-template-storybook-landing',
  templateUrl: './storybook-landing.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StorybookLandingComponent {}

@NgModule({
  imports: [
    CommonModule,
    // Angular Material
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [StorybookLandingComponent],
  exports: [StorybookLandingComponent],
})
export class StorybookLandingComponentModule {}
