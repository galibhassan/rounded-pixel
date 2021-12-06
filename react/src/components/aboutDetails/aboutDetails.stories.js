import React from "react";
import { AboutDetails } from "./aboutDetails.component";

export default {
  title: "Rounded Pixel/AboutDetails",
  component: AboutDetails,
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

const Template = (args) => <AboutDetails {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
