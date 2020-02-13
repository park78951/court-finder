const withImages = require('next-images');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = withImages({
  webpack: (config, options) => {
    config.plugins.push(
      new Dotenv({
        path: path.join(__dirname, '../../.env'),
        systemvars: true,
      })
    )
    return config;
  },
});
