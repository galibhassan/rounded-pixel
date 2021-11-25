import React from "react";
import Drawer from "./drawer.component"

export default {
  title: "Rounded Pixel/Drawer",
  component: Drawer,
};

const Template = (args) => <Drawer {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
