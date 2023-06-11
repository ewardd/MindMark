import path from 'path';

const pathResolve = (pathUrl: string) => path.join(__dirname, `../${pathUrl}`);

import type { StorybookConfig } from '@storybook/react-webpack5';
const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    path.dirname(require.resolve(path.join('@storybook/addon-links', 'package.json'))),
    path.dirname(require.resolve(path.join('@storybook/addon-essentials', 'package.json'))),
    path.dirname(require.resolve(path.join('@storybook/preset-create-react-app', 'package.json'))),
    path.dirname(require.resolve(path.join('@storybook/addon-interactions', 'package.json'))),
    path.dirname(require.resolve(path.join('@dreamworld/addon-redux', 'package.json'))),
  ],
  framework: {
    name: path.dirname(
      require.resolve(path.join('@storybook/react-webpack5', 'package.json')),
    ) as '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        ...{
          '@shared': pathResolve('src/shared'),
          '@entities': pathResolve('src/entities'),
          '@features': pathResolve('src/features'),
          '@widgets': pathResolve('src/widgets'),
          '@pages': pathResolve('src/pages'),
          '@app': pathResolve('src/app'),
        },
      },
    },
  }),
};
export default config;
