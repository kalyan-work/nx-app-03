
import Title  from './Title';

export default {
  component: Title,
  title: 'Title', 
};

const Template = (args) => <Title {...args} />;

export const Primary = Template.bind({})
Primary.args = {
}