import React from "react";
import { TestComponent } from "./test.component";
import { ToolBar } from "../toolbar/toolbar.component";
import { ToolContainer } from "../toolContainer/toolContainer.component";

export default {
  title: "Rounded Pixel/Tools inside toolbar",
  component: TestComponent,
  argTypes: {},
};

const Template = (args) => <TestComponent {...args} />;

export const InsideToolBar = Template.bind({});
InsideToolBar.args = {};
InsideToolBar.decorators = [
  (Story) => {
    return (
      <div style={{ height: "90vh" }}>
        <ToolBar>
          <Story />
        </ToolBar>
      </div>
    );
  },
];
