import React from "react";
import { ColorPicker } from "./colorPicker.component";
import { RoundednessSlider } from "../roundednessSlider/roundednessSlider.component";

export default {
  title: "Rounded Pixel/ColorPicker",
  component: ColorPicker,
  decorators: [
    (Story) => (
      <>
        <RoundednessSlider />
        <Story />
      </>
    ),
  ],
};

const Template = (args) => <ColorPicker {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
