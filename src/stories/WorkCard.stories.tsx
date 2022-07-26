import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  WorkCard  from './WorkCard';

export default {
  title: 'Example/WorkCard',
  component: WorkCard,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof WorkCard>;

const Template: ComponentStory<typeof WorkCard> = (args) => <WorkCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isBlog: true,
  img: 'babygo',
  name: 'babygo',
  description: 'description'
};
