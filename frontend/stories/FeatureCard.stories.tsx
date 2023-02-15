import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FeatureCard } from "./FeatureCard";

export default {
  title: "Feature Card",
  component: FeatureCard,
  argTypes: {
    accentColor: {
      defaultValue: "red",
      type: { required: true, name: "string" },
    },
    outline: {
      defaultValue: true,
      type: "boolean",
    },
    title: {
      defaultValue: "Title",
      type: { required: true, name: "string" },
    },
    description: {
      defaultValue: "lorem ipsum",
      type: { required: true, name: "string" },
    },
    icon: {
      control: { disable: true },
    },
  },
} as ComponentMeta<typeof FeatureCard>;

const Template: ComponentStory<typeof FeatureCard> = (args) => (
  <FeatureCard {...args} />
);

export const cart = Template.bind({});
