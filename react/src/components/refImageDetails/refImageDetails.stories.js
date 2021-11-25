import React from "react";
import { RefImageDetails } from "./refImageDetails.component";

export default {
  title: "Rounded Pixel/RefImageDetails",
  component: RefImageDetails,
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

const Template = (args) => <RefImageDetails {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
