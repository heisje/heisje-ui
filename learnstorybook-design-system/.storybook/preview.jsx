/** @type { import('@storybook/react').Preview } */
import React from 'react';
import { GlobalStyle } from '../src/shared/global';
import { loadFontsForStorybook } from '../src/util/loadFontsForStorybook';

// loadFontsForStorybook();
const withGlobalStyle = (storyFn) => (
  <>
    <link
      rel='stylesheet'
      href='https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900'
    />
    <GlobalStyle />
    {storyFn()}
  </>
);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [withGlobalStyle],
};

export default preview;
