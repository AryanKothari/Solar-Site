import type { Preview } from "@storybook/react";
import '../app/globals.css'

const preview: Preview = {
  parameters: {
    actions: { argTypes: 'click' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    themes: {
      default: 'light',
      list: [
        { name: 'light', class: '', color: '#fff' },
        { name: 'dark', class: 'dark', color: '#000' },
      ],
    },
  },
};

export default preview;
