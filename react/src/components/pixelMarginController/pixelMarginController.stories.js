import React from "react";
import { PixelMarginController } from "./pixelMarginController.component";
import { Board } from "../board/board.component";

export default {
  title: "Rounded Pixel/PixelMarginController",
  component: PixelMarginController,
  decorators: [
    (Story) => (
      <>
        <Story />
        <Board parentWidth={600} parentHeight={300}/>
      </>
    ),
  ],
};

const Template = (props) => <PixelMarginController {...props} />;
export const Primary = Template.bind({});
Primary.props = {};
