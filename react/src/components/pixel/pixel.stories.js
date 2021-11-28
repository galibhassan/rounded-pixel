import React from "react";
import { Pixel } from "./pixel.component";
import { ToolButton } from "../toolButton/toolButton.component";
import { RoundednessSlider } from "../roundednessSlider/roundednessSlider.component";

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
          <RoundednessSlider/>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "3px",
              width: 200,
              height: 200,
              backgroundColor: "lightgray",
            }}
          >
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
          </div>
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
  pixelMargin: "2px"
};
