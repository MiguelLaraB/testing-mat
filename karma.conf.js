// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
        DEFAULT_TIMEOUT_INTERVAL: 30000
      },
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/unit-testing'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml'],
    browsers: ['ChromeHeadlessCI'],
     customLaunchers: {
       ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox',
                '--disable-gpu',
                '--disable-software-rasterizer',
                '--disable-dev-shm-usage',  // reduce la memoria compartida
                '--remote-debugging-port=9222'
        ]
       }
    },
    singleRun: true,
    restartOnFileChange: true,
    browserDisconnectTimeout: 120000, // 10 segundos
    browserNoActivityTimeout: 120000,
    captureTimeout: 180000,
    concurrency: 1,
    browserDisconnectTolerance: 3,
  });
};
