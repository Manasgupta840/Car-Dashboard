import type { Meta, StoryObj } from "@storybook/react";
import Sidebar from "./page";


const meta: Meta<typeof Sidebar> = {
  title: "Organisms / Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

const OPTIONS: { label: string; iconPath: string }[] = [
  { label: "Baseline Option", iconPath: "/assets/icon-chart-line-light.svg" },
  { label: "Duplicate Option", iconPath: "/assets/icon-copy.svg" },
  { label: "Delete Option", iconPath: "/assets/icon-delete.svg" },
];

export const Primary: Story = {
  name: "Sidebar",
  args: {
    options: OPTIONS,
  },
};