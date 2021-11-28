import React from "react";
import { RoundednessSlider } from "./roundednessSlider.component";
import classes from './roundednessSlider.module.css'

export default {
  title: "Rounded Pixel/Roundedness Slider",
  component: RoundednessSlider,
  decorators: [
    (Story) => {
      return (
        <div style={{ width: "100%", backgroundColor: "#F4F4F4", display:"flex"}}>
          <div style={{width:"20%"}}></div>
          <div className={classes.toolChunkContainer}>
            <Story />
          </div>
        </div>
      );
    },
  ],
};

const Template = (args) => <RoundednessSlider {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
