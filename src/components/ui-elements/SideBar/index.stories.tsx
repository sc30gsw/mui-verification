import { withRouter } from "storybook-addon-remix-react-router";

import type { Meta, StoryObj } from "@storybook/react";

import { SideBar } from ".";

export default {
  component: SideBar,
  args: {
    salesOffice: "大阪営業所",
    accountName: "田中太郎",
  },
  argTypes: { onLogout: { action: "onLogout" } },
} satisfies Meta<typeof SideBar>;

type Story = StoryObj<typeof SideBar>;

export const Default: Story = {
  decorators: [withRouter],
};
