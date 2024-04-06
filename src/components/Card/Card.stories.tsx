import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components / Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  name: "Card",
  render: () => <Card>Hello</Card>,
};

export const CardWithStyle: Story = {
  name: "CardWithStyle",
  render: () => <Card className="bg-slate-300">Hello</Card>,
};
