import { Button } from './index';

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
};

const Template = (args) => <Button {...args}>Hello</Button>;

export const Default = Template.bind({});
