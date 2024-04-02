import { Box, Typography } from "@mui/material";
import { withRouter } from "storybook-addon-remix-react-router";

import type { Meta, StoryObj } from "@storybook/react";

import { MainLayout } from ".";

export default {
  component: MainLayout,
} satisfies Meta<typeof MainLayout>;

type Story = StoryObj<typeof MainLayout>;

export const Default: Story = {
  render: () => (
    <MainLayout>
      <Box>
        <Typography variant="h1"> CONTENTS</Typography>
      </Box>
    </MainLayout>
  ),
  decorators: [withRouter],
};

export const Fullscreen: Story = {
  ...Default,
  args: { overlayLoading: true },
  render: () => (
    <MainLayout overlayLoading={true}>
      <Box>
        <Typography variant="h1"> CONTENTS</Typography>
      </Box>
    </MainLayout>
  ),
};
