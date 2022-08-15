
import TransferList  from './TransferList';

export default {
  component: TransferList,
  title: 'TransferList', 
};

const Template = (args) => <TransferList {...args} />;

export const Primary = Template.bind({})
Primary.args = {
}