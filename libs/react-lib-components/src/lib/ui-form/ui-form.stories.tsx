import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UiForm } from './ui-form';

export default {
  component: UiForm,
  title: 'UiForm',
} as ComponentMeta<typeof UiForm>;

const Template: ComponentStory<typeof UiForm> = (args) => <UiForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
