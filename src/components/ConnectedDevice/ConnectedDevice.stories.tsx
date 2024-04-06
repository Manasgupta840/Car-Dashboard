import type { Meta, StoryObj } from "@storybook/react";
import ConnectedDevice from "./ConnectedDevice";

const meta: Meta<typeof ConnectedDevice> = {
  title: "Components / ConnectedDevice",
  component: ConnectedDevice,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ConnectedDevice>;

export const Primary: Story = {
  name: "ConnectedDevice",
};
