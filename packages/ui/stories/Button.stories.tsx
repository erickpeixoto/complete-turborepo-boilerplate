import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Button } from "../components/";

//create a story for the Button component
export default {
  title: "UI/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

//create a template for the Button component
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
//create a story for the Button component

export const Primary = Template.bind({});
Primary.args = {
  name: "Button",
};
