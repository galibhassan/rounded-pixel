import React from 'react';
import { ToolButton } from './toolButton.component';
import {ToolBar} from '../toolbar/toolbar.component'
import { ToolContainer } from '../toolContainer/toolContainer.component';


export default {
  title: 'Rounded Pixel/Tools',
  component: ToolButton,
  argTypes: {},
};

const Template = (args) => <ToolButton {...args} />;

export const Brush = Template.bind({});
Brush.args = {
  toolName: "brush"
};
export const Eraser = Template.bind({});
Eraser.args = {
  toolName: "eraser"
};

export const Grid = Template.bind({});
Grid.args = {
  toolName: "grid"
};

export const RefImage = Template.bind({});
RefImage.args = {
  toolName: "refImage"
};

export const Eyedropper = Template.bind({});
Eyedropper.args = {
  toolName: "eyedropper"
};

export const Save = Template.bind({});
Save.args = {
  toolName: "save"
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