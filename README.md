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
// Theme is Filled
exports.AccountBookFill = getIcon('account-book', fill, getNode(newViewBox, ...));
exports.AlertFill = getIcon('alert', fill, getNode(newViewBox, ...));
exports.AliwangwangFill = getIcon('aliwangwang', fill, getNode(newViewBox, ...));
exports.AlipayCircleFill = getIcon('alipay-circle', fill, getNode(newViewBox, ...));

// Theme is Outlined
exports.AccountBookOutline = getIcon('account-book', outline, getNode(newViewBox, ...));
exports.AlertOutline = getIcon('alert', outline, getNode(newViewBox, ...));
exports.AliwangwangOutline = getIcon('aliwangwang', outline, getNode(newViewBox, ...));
exports.AlipayCircleOutline = getIcon('alipay-circle', outline, getNode(newViewBox, ...));

// Two Tone

// others
```
## 4. Usage
```js
// src/App.js
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Icon } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>The following are ant icons:</p>
        theme is outlined(default): <Icon type='star'/>
        theme is filled: <Icon type="star" theme="filled" />
      </header>
    </div>
  );
}

export default App;
```
```Page result```
![app result](./docs/app.png)

[more: Antd Icon](https://ant.design/components/icon/)


