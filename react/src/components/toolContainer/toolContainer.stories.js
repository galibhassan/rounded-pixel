import React from "react";
import { ToolContainer } from "./toolContainer.component";
import { ToolBar } from "../toolbar/toolbar.component";

export default {
  title: "Rounded Pixel/ToolContainer",
  component: ToolContainer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <ToolContainer {...args} />;

export const InsideToolBar = Template.bind({});
InsideToolBar.args = {
    children:[
        <button>1</button>
    ]
}
InsideToolBar.decorators = [
    (Story) => {
      return (
        <div style={{ height: "90vh" }}>
          <ToolBar>
            <Story/>
            <Story/>
            <Story/>
          </ToolBar>
        </div>
      );
    },
  ]