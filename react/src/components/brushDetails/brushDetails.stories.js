import React from "react";
import { BrushDetail } from "./brushDetails.component";

export default {
  title: "Rounded Pixel/BrushDetail",
  component: BrushDetail,
  decorators: [
    (Story) => {
      return (
        <div style={{ width: "100%", backgroundColor: "#F4F4F4", display:"flex"}}>
          <div style={{width:"20%"}}></div>
          <Story />
        </div>
      );
    },
  ],
};

const Template = (args) => <BrushDetail {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
