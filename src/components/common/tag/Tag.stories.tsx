import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tag } from './Tag';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'common/tag/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Main = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Main.args = {
  name: 'Main',
  className: 'bg-main text-white',
};
