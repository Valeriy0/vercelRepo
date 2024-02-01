const path = require('path');

module.exports = {
  webpack: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      features: path.resolve(__dirname, 'src/features'),
      helpers: path.resolve(__dirname, 'src/helpers'),
      layouts: path.resolve(__dirname, 'src/layouts'),
      pages: path.resolve(__dirname, 'src/pages'),
    },
  },
};
