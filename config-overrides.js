const { override, fixBabelImports } = require('customize-cra');
const path = require('path');

module.exports = override(
  // 全局导入antd
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),

  // used to minimise bundle size by 500KB
  function(config, env) {
    const alias = config.resolve.alias || {};
    alias['@ant-design/icons/lib/dist$'] = path.resolve(__dirname, './src/icons.js');
    config.resolve.alias = alias;
    return config;
  }
)
