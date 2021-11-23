import React from 'react';
import BrushTool from './brushTool.component';

export default {
  title: 'Tools/Brush',
  component: BrushTool,
  argTypes: {},
};

const Template = (args) => <BrushTool {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};
