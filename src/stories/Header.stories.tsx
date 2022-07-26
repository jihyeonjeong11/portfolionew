import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Header  from './Header';

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isBlog: true
};

export const Secondary = Template.bind({});
Primary.args = {
  isBlog: false
};
