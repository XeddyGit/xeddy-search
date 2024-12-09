const webpack = require('webpack');

module.exports = function override(config, env) {
    config.resolve.fallback = {
      fs: false,
      path: false,
      crypto: false,
    };
    config.plugins = [
      new webpack.DefinePlugin({
        'process.env.REACT_APP_BACKEND_PROD_URL': JSON.stringify(process.env.REACT_APP_BACKEND_PROD_URL),
        'process.env.REACT_APP_BACKEND_URL': JSON.stringify(process.env.REACT_APP_BACKEND_URL),
      }),
    ];
    return config;
  };