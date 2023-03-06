//create a story button
import { Meta, Story } from "@storybook/react";
import React from "react";

import Button from "./Button";

export default {
  title: "Portfolio/Button",
  component: Button,
} as Meta;

const Template: Story = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "Button",
};
