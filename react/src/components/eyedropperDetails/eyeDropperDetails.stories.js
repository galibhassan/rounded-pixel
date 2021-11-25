import React from "react";
import { EyedropperDetails } from "./eyedropperDetails.component";

export default {
  title: "Rounded Pixel/EyedropperDetails",
  component: EyedropperDetails,
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

const Template = (args) => <EyedropperDetails {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
