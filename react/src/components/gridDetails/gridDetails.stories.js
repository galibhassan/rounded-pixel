import React from "react";
import { GridDetails } from "./gridDetails.component";

export default {
  title: "Rounded Pixel/GridDetails",
  component: GridDetails,
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

const Template = (args) => <GridDetails {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
