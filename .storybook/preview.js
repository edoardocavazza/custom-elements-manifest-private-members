import { setCustomElementsManifest } from '@storybook/web-components';
import json from '../custom-elements.json';

setCustomElementsManifest(json);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}