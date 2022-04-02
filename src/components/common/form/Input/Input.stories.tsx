import { ComponentStory } from "@storybook/react";
import { Input } from "./Input";

export default {
  title: 'common/form/Input',
  component: Input,
};

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Email = Template.bind({});

Email.args = {
  id: 'email',
  type: 'email',
  placeholder: 'example@email.com',
};
