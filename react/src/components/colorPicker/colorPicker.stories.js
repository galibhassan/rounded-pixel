import React from "react";
import { ColorPicker } from "./colorPicker.component";

export default {
  title: "Rounded Pixel/ColorPicker",
  component: ColorPicker,
  /*   
  decorators: [
    (Story) => {
      return (
        <div style={{ width: "100%", backgroundColor: "#F4F4F4", display:"flex"}}>
          <div style={{width:"20%"}}></div>
          <Story />
        </div>
      );
    },
  ], */
};

const Template = (args) => <ColorPicker {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
