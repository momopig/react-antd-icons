const { override, fixBabelImports } = require('customize-cra');
const path = require('path');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),

  function(config, env) {
    const alias = config.resolve.alias || {};
    alias['@ant-design/icons/lib/dist$'] = path.resolve(__dirname, './src/icons/index.js');
    config.resolve.alias = alias;
    return config;
  }
)
