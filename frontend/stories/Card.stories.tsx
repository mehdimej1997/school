import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Card } from "./Card";

export default {
  title: "Card",
  Component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const CourseCard = Template.bind({});
export const BlogCard = Template.bind({});

CourseCard.args = {
  type: "course",
  intent: "blue",
};

BlogCard.args = {
  type: "blog",
};
