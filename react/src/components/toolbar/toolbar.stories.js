import React from "react";
import { ToolBar } from "./toolbar.component";
import "./toolbarStory.css";

export default {
  title: "Rounded Pixel/ToolBar",
  component: ToolBar,
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="storyWrapper">
        {/* <div style={{ height:100 }}> */}
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <ToolBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const WithChildren = Template.bind({});
WithChildren.args = {
  children:[
    <button>1</button>,
    <button>2</button>,
    <button>3</button>,
    <button>4</button>,
    <button>5</button>,
    <button>6</button>,
  ]
};
