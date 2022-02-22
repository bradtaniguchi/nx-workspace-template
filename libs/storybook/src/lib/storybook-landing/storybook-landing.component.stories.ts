import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { StorybookLandingComponent } from './storybook-landing.component';

export default {
  title: 'StorybookLandingComponent',
  component: StorybookLandingComponent,
  decorators: [
    moduleMetadata({
      imports: [
        // Angular Material
        FlexLayoutModule,
        MatCardModule,
        MatButtonModule,
      ],
    }),
  ],
} as Meta<StorybookLandingComponent>;

const Template: Story<StorybookLandingComponent> = (
  args: StorybookLandingComponent
) => ({
  component: StorybookLandingComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
