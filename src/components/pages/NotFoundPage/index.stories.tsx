import { withRouter } from 'storybook-addon-remix-react-router'

import type { Meta, StoryObj } from '@storybook/react'

import { NotFoundPage } from '.'

export default {
  component: NotFoundPage,
  decorators: [withRouter],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof NotFoundPage>

type Story = StoryObj<typeof NotFoundPage>

export const Default: Story = {}
