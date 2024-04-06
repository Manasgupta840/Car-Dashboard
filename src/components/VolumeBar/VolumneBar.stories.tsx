import React from "react";
import VolumeBar from "./VolumeBar";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/VolumeBar",
  component: VolumeBar,
  argTypes: {
    currentVolume: { control: "number" },
    maxVolume: { control: "number" },
  },
} as Meta;

type Story = StoryObj<typeof VolumeBar>;

export const Primary: Story = {
  name: "VolumeBar",
  args: {
    initialVolume: 5,
    maxVolume: 10,
  },
};
