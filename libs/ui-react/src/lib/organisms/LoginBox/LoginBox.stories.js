
import LoginBox  from './LoginBox';

export default {
  component: LoginBox,
  title: 'LoginBox', 
};

const Template = (args) => <LoginBox {...args} />;

export const Primary = Template.bind({})
Primary.args = {
}