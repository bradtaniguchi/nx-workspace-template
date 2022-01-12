import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nx-workspace-template-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
    `
      img {
        max-width: 300px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {}
