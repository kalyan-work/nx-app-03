
import UiReact  from './ui-react';

export default {
  component: UiReact,
  title: 'UiReact', 
};

const Template = (args) => <UiReact {...args} />;

export const Primary = Template.bind({})
Primary.args = {
}