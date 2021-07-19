import React from 'react';
import logo from './logo.svg';
import Tooltip from './tooltip/Tooltip';
import './App.css';

function App() {
  const direction = 'right';
  const content = 'Hello, I\'m a tooltip';
  const content1 = <div>hello!!</div>
  return (
    <div className="App">
      <Tooltip color={'red'}  textColor={'white'} content={content} direction={'left'} delay={600}>
        <button>I'm a button going left</button>
      </Tooltip>
      <br />
      <Tooltip color={'black'} textColor={'red'} content={content1} direction={'right'} delay={300}>
        <button>I'm a button going right</button>
      </Tooltip>
      <br />
      <Tooltip color={'black'} textColor={'purple'} content={content} direction={'top'} delay={1000}>
        <button>I'm a button going top</button>
      </Tooltip>
      <br />
      <Tooltip color={'black'} textColor={'yellow'} content={content} direction={'bottom'} delay={2000}>
        <button>I'm a button going bottom</button>
      </Tooltip>
    </div>
  );
}

export default App;
