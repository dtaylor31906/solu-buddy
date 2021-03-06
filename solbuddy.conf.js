// Karma configuration file
// Generated on Wed Apr 13 2016 18:34:27 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    //Plugins
    plugins: [
      'karma-jasmine',
      'karma-coverage',
      'karma-firefox-launcher'
    ],

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        'static/js/solution.js',
        'static/js/utility.js',
        'static/js/formula.js',
        'static/js/elements.js',
        'static/js/calculator.js',
        'static/js/randomize.js',
        'static/js/validate.js',
        'static/js/test_gen.js',
        'testing/spec/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'static/js/solution.js' : ['coverage'],
        'static/js/utility.js': ['coverage'],
        'static/js/formula.js': ['coverage'],
        'static/js/elements.js': ['coverage'],
        'static/js/calculator.js': ['coverage'],
        'static/js/randomize.js' : ['coverage'],
        'static/js/validate.js' : ['coverage'],
        'testing/spec/*.js' : ['coverage']
    },

    // preprocessors : {
    //   '**/app/js/*/*.js' : 'coverage',
    //   '**/app/js/modules/*/*.js' : 'coverage',
    //   '**/app/js/services/*/*.js' : 'coverage'
    // },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


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
    browsers: ['Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
