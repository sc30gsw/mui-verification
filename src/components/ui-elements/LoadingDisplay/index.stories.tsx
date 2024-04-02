import type { Meta, StoryObj } from "@storybook/react";

import LoadingDisplay from ".";

export default {
  component: LoadingDisplay,
} satisfies Meta<typeof LoadingDisplay>;

type Story = StoryObj<typeof LoadingDisplay>;

export const Default: Story = {
  render: () => <LoadingDisplay />,
};

export const Fullscreen: Story = {
  render: () => <LoadingDisplay fullscreen />,
  parameters: { layout: "fullscreen" },
};
