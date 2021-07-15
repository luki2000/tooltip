import React from 'react';
import logo from './logo.svg';
import Tooltip from './tooltip/Tooltip';
import './App.css';

function App() {
  const direction = 'bottom';
  const content = 'Hello, I\'m a tooltip';
  return (
    <div className="App">
      <Tooltip content={content} direction={direction}>
        <button>I'm a button</button>
      </Tooltip>
    </div>
  );
}

export default App;
