var path = require('path');
var webpack = require('webpack');

module.exports = function (config) {
    config.set({

//        browsers: [ 'Chrome', 'PhantomJS' ],
        browsers: [ 'PhantomJS' ],

        singleRun: true,

        frameworks: [ 'mocha' ],

        files: [
            'tests.webpack.js'
        ],

        preprocessors: {
            'tests.webpack.js': [ 'webpack', 'sourcemap' ]
        },

        reporters: [ 'dots' ],

        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    { test: /\.js$/, loader: 'babel-loader', exclude: path.resolve(__dirname, 'node_modules') },
                    { test: /\.json$/, loader: 'json' }
                ]
            },
            externals: {
                'react/addons': true,
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': true
            }
        },

        webpackServer: {
            noInfo: true
        }
    });
};
