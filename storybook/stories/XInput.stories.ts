import type { Meta, StoryObj } from "@nuxtjs/storybook";

import XInput from "../../components/x-input.vue";

type Story = StoryObj<typeof XInput>;

const meta = {
  title: "Components/XInput",
  component: XInput,
  tags: ["autodocs"],
  argTypes: {
    modelValue: {
      control: "text",
      description: "The value of the input",
    },
  },
} satisfies Meta<typeof XInput>;

export const Default: Story = {
  args: {},
};

export default meta;
