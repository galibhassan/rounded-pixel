import React from "react";
import { BoardContainer } from "./boardContainer.component";

export default {
  title: "Rounded Pixel/BoardContainer",
  component: BoardContainer,
  decorators: [
    (Story) => (
      <div style={{ width: "400px", height: "300px" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <BoardContainer {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
