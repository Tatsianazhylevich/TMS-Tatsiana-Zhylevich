import React, { useState } from 'react';
import './App.css';
import { Button } from './Components/Button'

function App() {
  const [value, setValue] = useState(0)

  function decrement() {
    setValue(value - 1);
  }

  function increment() {
    setValue(value + 1);
  }

  function reset() {
    setValue(0);
  }

  return (
    <div className="container">
        <div className="counter center">{value}</div>
        <div className="buttons-panel">
          <Button className="decrement" onClick={decrement}>-</Button>
          <Button className="reset" onClick={reset}>0</Button>
          <Button className="increment" onClick={increment}>+</Button>
        </div>
      </div>
  );
}

export default App;
