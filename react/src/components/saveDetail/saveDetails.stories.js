import React from "react";
import { SaveDetails } from "./saveDetails.component";

export default {
  title: "Rounded Pixel/SaveDetails",
  component: SaveDetails,
  decorators: [
    (Story) => {
      return (
        <div style={{ width: "100%", backgroundColor: "#F4F4F4", display:"flex"}}>
          <div style={{width:"20%"}}></div>
          <Story />
          <div style={{width:"20%"}}></div>
        </div>
      );
    },
  ],
};

const Template = (args) => <SaveDetails {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
