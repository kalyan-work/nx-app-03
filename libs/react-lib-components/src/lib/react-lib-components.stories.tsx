import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactLibComponents } from './react-lib-components';

export default {
  component: ReactLibComponents,
  title: 'ReactLibComponents',
} as ComponentMeta<typeof ReactLibComponents>;

const Template: ComponentStory<typeof ReactLibComponents> = (args) => (
  <ReactLibComponents {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
