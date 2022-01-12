import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BuildConfigService } from '@nx-workspace-template/common-ng';

@Component({
  selector: 'nx-workspace-template-main',
  templateUrl: './main.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  constructor(public configService: BuildConfigService) {}
}
