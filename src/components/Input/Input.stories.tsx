import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";
import Image from "next/image";

const meta: Meta<typeof Input> = {
  title: "Components / Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  name: "Input",
  args: {
    leftIcon: (
      <Image
        src="/search-icon-grey.svg"
        alt="search"
        width={17.6}
        height={17.6}
      />
    ),
    inputProps: {
      type: "text",
      placeholder: "Enter your input",
      className: "bg-[#DCDBDB] placeholder:text-[#9A9A9A]",
    },
  },
};
