import { CommonModule } from '@angular/common';
import { GridModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';
import { DashboardComponent } from './dashboard.component';

export default {
  title: 'internal-ng/modules/DashboardComponent',
  component: DashboardComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        // Angular Material
        GridModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
      ],
    }),
    componentWrapperDecorator(
      (story) => `<div class="mat-app-background">${story}</div>`
    ),
  ],
} as Meta<DashboardComponent>;

const Template: Story<DashboardComponent> = (args: DashboardComponent) => ({
  component: DashboardComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
