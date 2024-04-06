import type { Meta, StoryObj } from "@storybook/react";
import MusicCard from "./MusicCard";

const meta: Meta<typeof MusicCard> = {
  title: "Components / MusicCard",
  component: MusicCard,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MusicCard>;

export const Primary: Story = {
  name: "MusicCard",
};
