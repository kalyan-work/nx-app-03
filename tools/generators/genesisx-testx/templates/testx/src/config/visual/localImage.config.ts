// eslint-disable-next-line @typescript-eslint/no-var-requires
const { getTags } = require('../../support/bddTags');
const baseConfig = require('../base.config');
const fs = require('fs');
const { join } = require('path');

exports.config = {
  ...baseConfig,
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 4,
      browserName: 'chrome',
      acceptInsecureCerts: true,
      'goog:chromeOptions': {
        args: ['--ignore-certificate-errors', '--allow-running-insecure-content'],
      },
    },
  ],

  services: [
    [
      'image-comparison',
      // The options
      {
        // Some options, see the docs for more
        baselineFolder: join(process.cwd(), './src/visual/baseline'),
        formatImageName: '{tag}-{logName}-{width}x{height}',
        screenshotPath: join(process.cwd(), './src/visual/'),
        savePerInstance: true,
        autoSaveBaseline: true,
        blockOutStatusBar: true,
        blockOutToolBar: true,
        // NOTE: When you are testing a hybrid app please use this setting
        isHybridApp: true,
        // Options for the tabbing image
        tabbableOptions: {
          circle: {
            size: 18,
            fontSize: 18,
            // ...
          },
          line: {
            color: '#ff221a', // hex-code or for example words like `red|black|green`
            width: 3,
          },
        },
        // ... more options
      },
    ],
  ],
};
