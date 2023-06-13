import type { Preview } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/app/providers/redux/store';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
        boolean: /^is[A-Z]/,
      },
    },
  },
  loaders: [
    async () => ({
      store: await import('../src/app/providers/redux/store'),
    }),
  ],
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
};

export default preview;
