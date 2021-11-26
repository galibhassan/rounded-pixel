import React from "react";
import { Pixel } from "./pixel.component";
import { ToolButton } from "../toolButton/toolButton.component";

export default {
  title: "Rounded Pixel/Pixel",
  component: Pixel,
  decorators: [
    (Story) => {
      return (
        <div>
          <>
            <ToolButton toolName="brush" />
            <ToolButton toolName="eyedropper" />
            <ToolButton toolName="grid" />
            <ToolButton toolName="refImage" />
            <ToolButton toolName="save" />
            <ToolButton toolName="eraser" />
          </>
          <Story/>
          <Story/>
          <Story/>
          <Story/>
          <Story/>
        </div>
      );
    },
  ],
};

const Template = (args) => <Pixel {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: "20px",
  height: "20px",
  backgroundColor: "blue",
};
