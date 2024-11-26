import type { Meta, StoryObj } from '@storybook/react'
import { Navbar } from './Navbar'

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="min-h-[200px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Navbar>

export const Light: Story = {
  parameters: {
    theme: 'light',
  },
}

export const Dark: Story = {
  parameters: {
    theme: 'dark',
  },
  decorators: [
    (Story) => (
      <div className="dark">
        <Story />
      </div>
    ),
  ],
} 