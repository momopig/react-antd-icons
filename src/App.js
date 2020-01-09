import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Select, Icon } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>The following are ant icons:</p>
        <Icon type='close'/>
        <Icon type='caret-up'/>
        <Icon type='caret-down'/>
        <Select></Select>

      </header>
    </div>
  );
}

export default App;
