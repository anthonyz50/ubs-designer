import React from 'react';
import type { Preview } from '@storybook/react-vite';
import { UBSThemeProvider, UBSGlobalStyles } from '../src/theme';

const preview: Preview = {
  decorators: [
    (Story) => (
      <UBSThemeProvider defaultColourMode="light">
        <UBSGlobalStyles />
        <Story />
      </UBSThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color|colour)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        'UBS White': { value: '#FFFFFF' },
        'Pastel I': { value: '#ECEBE4' },
        'Pastel II': { value: '#F5F0E1' },
        'Black': { value: '#000000' },
      },
    },
    viewport: {
      options: {
        mobile: { name: 'Mobile', styles: { width: '320px', height: '568px' } },
        tablet: { name: 'Tablet', styles: { width: '768px', height: '1024px' } },
        desktop: { name: 'Desktop', styles: { width: '1024px', height: '768px' } },
        wide: { name: 'Wide', styles: { width: '1440px', height: '900px' } },
      },
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
