const path = require('path');

module.exports = {
  resolve: {
    modules: ['src/scripts', 'node_modules'],
    extensions: ['.jsx', '.js'],
    unsafeCache: true,
    alias: {
      api: path.resolve(__dirname, 'src', 'api'),
      assets: path.resolve(__dirname, 'src', 'assets'),
      components: path.resolve(__dirname, 'src', 'components'),
      containers: path.resolve(__dirname, 'src', 'containers'),
      services: path.resolve(__dirname, 'src', 'services'),
      src: path.resolve(__dirname, 'src'),
      store: path.resolve(__dirname, 'src', 'store'),
      style: path.resolve(__dirname, 'src', 'style'),
    }
  }
};
