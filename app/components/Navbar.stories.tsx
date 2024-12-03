import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';

// More info about Meta: https://storybook.js.org/docs/react/api/csf#meta-field-types
const meta = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More info about stories: https://storybook.js.org/docs/react/writing-stories/introduction
export const Primary: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}; 