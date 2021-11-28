import React from "react";
import App from "./App"


export default {
  title: "Rounded Pixel/App",
  component: App
};

const Template = (props) => <App {...props} />;
export const Primary = Template.bind({});
Primary.props = {};
