'use strict';

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const dev = require('./server/configs/development');

const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const ENV = process.env.npm_lifecycle_event;
const isProd = ENV === 'build' || ENV === 'prod';
// const isServe = ENV === 'serve';

module.exports = function makeWebpackConfig(options) {
  const isDev = options ? !!options.DEV : false;
  const config = {
    entry: {
      app: './client/app/app.js',
      vendor: [
        'angular',
        'angular-animate',
        'angular-aria',
        'angular-cookies',
        'angular-resource',
        'angular-sanitize',
        'angular-ui-bootstrap',
        'angular-ui-router',
        'lodash'
      ]
    },

    output: {
      // Absolute output directory
      path: path.join(__dirname, '/.tmp/'),

      // Uses webpack-dev-server in development
      publicPath: isProd || isDev ? '/' : `http://${dev.host}:${dev.port}/`,

      // Filename for entry points
      filename: isProd ? '[name].[hash].js' : '[name].bundle.js',

      // Filename for non-entry points
      chunkFilename: isProd ? '[name].[hash].js' : '[name].bundle.js'
    },

    // Type of sourcemap to use per build type
    devtool: isProd || isDev ? 'source-map' : 'eval',

    module: {
      rules: [{
        // JS LOADER
        // Reference: https://github.com/babel/babel-loader
        // Transpile .js files using babel-loader
        // Compiles ES6 and ES7 into ES5 code
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            { loader: 'css-loader', query: { sourceMap: true } },
            { loader: 'less-loader' }
          ],
        })
      }, {
        // ASSET LOADER
        // Reference: https://github.com/webpack/file-loader
        // Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
        // Rename the file using the asset hash
        // Pass along the updated reference to your code
        // You can add here any file extension you want to get copied to your output
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file-loader'
      }, {
        // HTML LOADER
        // Reference: https://github.com/webpack/raw-loader
        // Allow loading html through js
        test: /\.html$/,
        loader: 'raw-loader'
      }]
    },

    plugins: [],

    cache: isDev,

    devServer: {},

    stats: {
      timings: true
    }
  };

  config.plugins.push(
    new HtmlWebpackPlugin({
      template: 'client/_index.html',
      filename: '../client/index.html',
      alwaysWriteToDisk: true
    }),

    new HtmlWebpackHarddiskPlugin(),
    // Reference: https://github.com/webpack/extract-text-webpack-plugin
    // Extract css files
    // Disabled when in test mode or not in build mode
    new ExtractTextPlugin({ filename: '[name].css', disable: false, allChunks: true }),

    new CommonsChunkPlugin({
      // (Give the chunk a different name)
      name: 'vendor',
      // (with more entries, this ensures that no other module
      //  goes into the vendor chunk)
      minChunks: Infinity
    }),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),

    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: [
          autoprefixer
        ]
      }
    })
  );

  // Add build specific plugins
  if (isProd) {
    config.plugins.push(
      // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
      // Only emit files when there are no errors
      new webpack.NoEmitOnErrorsPlugin(),

      // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
      // Minify all javascript, switch loaders to minimizing mode
      new webpack.optimize.UglifyJsPlugin({
        mangle: false,
        output: {
          comments: false
        },
        compress: {
          warnings: false
        }
      }),

      // Reference: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
      // Define free global variables
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      })
    );
  }

  if (isDev) {
    config.plugins.push(
      // Reference: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
      // Define free global variables
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"development"'
        }
      })
    );
  }

  /**
   * Dev server configuration
   * Reference: http://webpack.github.io/docs/configuration.html#devserver
   * Reference: http://webpack.github.io/docs/webpack-dev-server.html
   */
  config.devServer = {
    contentBase: './client/',
    stats: {
      modules: false,
      cached: false,
      colors: true,
      chunk: false,
    }
  };

  config.node = {
    global: true,
    process: true,
    crypto: 'empty',
    clearImmediate: false,
    setImmediate: false
  };

  return config;
};
