
import Alert  from './Alert';

export default {
  component: Alert,
  title: 'Alert', 
};

const Template = (args) => <Alert {...args} />;

export const Primary = Template.bind({})
Primary.args = {
}