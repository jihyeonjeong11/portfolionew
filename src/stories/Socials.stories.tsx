import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Socials  from './Socials';

export default {
  title: 'Example/Socials',
  component: Socials,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Socials>;

const Template: ComponentStory<typeof Socials> = (args) => <Socials {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
