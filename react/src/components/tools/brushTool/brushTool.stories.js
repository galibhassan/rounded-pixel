import React from 'react';
import BrushTool from './brushTool.component';
import { ToolBar } from '../../toolbar/toolbar.component';
import { ToolContainer } from '../../toolContainer/toolContainer.component';

export default {
  title: 'Rounded Pixel/Tools/Brush',
  component: BrushTool,
  argTypes: {},
};

const Template = (args) => <BrushTool {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};

export const InsideToolBar = Template.bind({});
InsideToolBar.args = {}
InsideToolBar.decorators = [
    (Story) => {
      return (
        <div style={{ height: "90vh" }}>
          <ToolBar>
            <ToolContainer>
              <Story/>
            </ToolContainer>
          </ToolBar>
        </div>
      );
    },
  ]