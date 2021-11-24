import React from 'react';
import { Logo } from './logo.component';

export default {
  title: 'Rounded Pixel/Logo',
  component: Logo,
  argTypes: {},
};

const Template = (args) => <Logo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};