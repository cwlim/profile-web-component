import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'profile-web-component',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      buildDir: '',
      serviceWorker: null, // disable service workers
    },
  ],
};
