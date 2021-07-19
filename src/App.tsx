import React from 'react';
import Tooltip from './tooltip/Tooltip';
import './App.css';

function App() {
  const tooltipdirectionRight = 'right';
  const tooltipdirectionLeft = 'left';
  const tooltipdirectionTop = 'top';
  const tooltipdirectionBottom = 'bottom';
  const content1 = 'Hello, I\'m a tooltip';
  const content2 = <div>hello!!</div>
  const red = 'red';
  const black = 'black';
  return (
    <div className="App">
      <Tooltip 
        color={red}  
        textColor={'white'} 
        tooltipMessage={content2} 
        direction={tooltipdirectionRight} 
        delay={600}>
        <button>I'm a button going right</button>
      </Tooltip>
      <br />
      <Tooltip 
        color={black} 
        textColor={'red'} 
        tooltipMessage={content2} 
        direction={tooltipdirectionLeft} 
        delay={300}>
        <button>I'm a button going left</button>
      </Tooltip>
      <br />
      <Tooltip 
        color={red} 
        textColor={'purple'} 
        tooltipMessage={content1} 
        direction={tooltipdirectionTop} 
        delay={1000}>
        <button>I'm a button going top</button>
      </Tooltip>
      <br />
      <Tooltip 
        color={black} 
        textColor={'yellow'} 
        tooltipMessage={content1} 
        direction={tooltipdirectionBottom} 
        delay={2000}>
        <button>I'm a button going bottom</button>
      </Tooltip>
    </div>
  );
}

export default App;
