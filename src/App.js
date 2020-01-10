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
