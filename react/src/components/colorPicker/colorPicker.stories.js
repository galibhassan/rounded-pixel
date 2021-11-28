import React from "react";
import { ColorPicker } from "./colorPicker.component";

export default {
  title: "Rounded Pixel/ColorPicker",
  component: ColorPicker,
};

const Template = (args) => <ColorPicker {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
