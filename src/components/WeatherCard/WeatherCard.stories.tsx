import type { Meta, StoryObj } from "@storybook/react";
import WeatherCard from "./WeatherCard";

const meta: Meta<typeof WeatherCard> = {
  title: "Components / WeatherCard",
  component: WeatherCard,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof WeatherCard>;

export const Primary: Story = {
  name: "WeatherCard",
};
