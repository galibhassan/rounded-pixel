import React from "react";
import { Board } from "./board.component";

export default {
  title: "Rounded Pixel/Board",
  component: Board,
};

const Template = (args) => <Board {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  parentWidth: 300,
  parentHeight: 300,
  pixelMargin: 2
};
