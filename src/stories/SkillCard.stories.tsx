import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  SkillCard  from './SkillCard';

export default {
  title: 'Example/SkillCard',
  component: SkillCard,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SkillCard>;

const Template: ComponentStory<typeof SkillCard> = (args) => <SkillCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};
