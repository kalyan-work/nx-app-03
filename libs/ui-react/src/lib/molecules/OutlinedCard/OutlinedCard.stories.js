
import OutlinedCard  from './OutlinedCard';

export default {
  component: OutlinedCard,
  title: 'OutlinedCard', 
};

const Template = (args) => <OutlinedCard {...args} />;

export const Primary = Template.bind({})
Primary.args = {
}