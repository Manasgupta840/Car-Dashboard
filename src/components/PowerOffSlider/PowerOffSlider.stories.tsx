import type { Meta, StoryObj } from "@storybook/react";
import PowerOffSlider from "./PowerOffSlider";

const meta: Meta<typeof PowerOffSlider> = {
  title: "Components / PowerOffSlider",
  component: PowerOffSlider,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PowerOffSlider>;

export const Primary: Story = {
  name: "PowerOffSlider",
};
