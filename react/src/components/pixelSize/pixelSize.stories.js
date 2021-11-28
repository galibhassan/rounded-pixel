import React from "react";
import { PixelSize } from "./pixelSize.component";
import { Board } from "../board/board.component";

export default {
  title: "Rounded Pixel/PixelSize",
  component: PixelSize,
  decorators: [
    (Story) => {
      return (
        <div
          style={{ width: "100%", backgroundColor: "#F4F4F4", display: "flex" }}
        >
          <div style={{ width: "20%" }}></div>
          <Story />
          <Board parentWidth={400} parentHeight={500} pixelMargin={2} />
        </div>
      );
    },
  ],
};

const Template = (args) => <PixelSize {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
