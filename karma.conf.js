// Karma configuration
// Generated on Sat Mar 11 2017 12:22:04 GMT+0000 (GMT Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      './app/bower_components/angular/angular.js',
      './app/bower_components/angular-resource/angular-resource.js',
      './app/bower_components/angular-mocks/angular-mocks.js',

      './app/app.js',

      './app/core/core.module.js',
      './app/core/beer-selection/beer-selection.module.js',
      './app/core/beer-selection/beer-selection.service.js',
      './app/core/beer-selection/beer-selection.spec.js',

      './app/core/beer-retriever/beer-retriever.module.js',
      './app/core/beer-retriever/beer-retriever.service.js',
      './app/core/beer-retriever/beer-retriever.spec.js',

      './app/components/beer-detail/beer-detail.module.js',
      './app/components/beer-detail/beer-detail.component.js',
      './app/components/beer-detail/beer-detail.spec.js',

      './app/components/beer-list/beer-list.module.js',
      './app/components/beer-list/beer-list.component.js',
      './app/components/beer-list/beer-list.spec.js',
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
