import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SectionRenderer from './SectionRenderer'

export default {
  title: 'Example/SectionRenderer',
  component: SectionRenderer,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SectionRenderer>;

const Template: ComponentStory<typeof SectionRenderer> = (args) => <SectionRenderer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'work'

};
