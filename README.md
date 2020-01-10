# 1. Reduce Antd icons bundle size(Load Antd icons on demand)

See related issue:[Antd v3.9.0 adds antd-icons which increases bundle size a lot](https://github.com/ant-design/babel-plugin-import/issues/271).

| Before Optimization| After Optimization|
|:----:|:----:|
|![before](./docs/map-before.png) | ![after](./docs/map-after.png)|
|![before](./docs/build-before.png) | ![after](./docs/build-after.png)|

## 2. Config `alias`

See the whole file [src/icons.js](./src/icons.js)
```js
// src/icons/index.js

/**
 * List all antd icons you want to use in your source code
 */
export {

  // caret-up
  default as CaretUpFill
} from '@ant-design/icons/lib/fill/CaretUpFill';

export {

  // caret-down
  default as CaretDownOutline
} from '@ant-design/icons/lib/outline/CaretDownOutline';

// and other icons...
```

```js
// create-react-app config-overrides.js
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
```
## 3. Cross-References(Icon Component map Icon type attribute)
```js
// src/icons/component_map_type.js(copy from the origin codes)
exports.AccountBookFill = getIcon('account-book', fill, getNode(newViewBox, ...));
exports.AlertFill = getIcon('alert', fill, getNode(newViewBox, ...));
exports.AlipaySquareFill = getIcon('alipay-square', fill, getNode(newViewBox, ...));
exports.AliwangwangFill = getIcon('aliwangwang', fill, getNode(newViewBox, ...));
exports.AlipayCircleFill = getIcon('alipay-circle', fill, getNode(newViewBox, ...));
// others
```
