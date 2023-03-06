import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Accordion, mock } from ".";

//create a story for the Accordion component
export default {
  title: "UI/Accordion",
  component: Accordion,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Accordion>;

//create a template for the Accordion component
const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: mock,
};
