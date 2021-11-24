import React from "react";
import { ToolDetails } from "./toolDetails.component";
import { ToolButton } from "../toolButton/toolButton.component";
import { ToolBar } from "../toolbar/toolbar.component";

export default {
  title: "Rounded Pixel/ToolDetail",
  component: ToolDetails,
  argTypes: {},
};

const Template = (args) => <ToolDetails {...args} />;

export const WithTools = Template.bind({});
WithTools.args = {};
WithTools.decorators = [
  (Story) => {
    return (
      <div style={{height:"90vh"}}>
        <Story />
        <ToolBar>
          <ToolButton toolName="brush" />
          <ToolButton toolName="eyedropper" />
          <ToolButton toolName="grid" />
          <ToolButton toolName="refImage" />
          <ToolButton toolName="save" />
          <ToolButton toolName="eraser" />
        </ToolBar>
      </div>
    );
  },
];
