import type { Meta, StoryObj } from "@storybook/react";

import AccountLabel from ".";

export default {
  component: AccountLabel,
} satisfies Meta<typeof AccountLabel>;

type Story = StoryObj<typeof AccountLabel>;

export const Default: Story = {
  render: () => (
    <AccountLabel salesOffice={"大阪営業所"} accountName={"田中太郎"} />
  ),
};
