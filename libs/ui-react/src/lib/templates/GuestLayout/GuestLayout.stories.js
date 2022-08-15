
import GuestLayout  from './GuestLayout';

export default {
  component: GuestLayout,
  title: 'GuestLayout', 
};

const Template = (args) => <GuestLayout {...args} />;

export const Primary = Template.bind({})
Primary.args = {
}