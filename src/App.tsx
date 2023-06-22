import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Clock } from './stories/clock/Clock';

function App() {
  return (
    <div className="App">
      <Clock fontSize={40} mode='onlyDate' />
      <Clock fontSize={70} mode='onlyTime' />
    </div>
  );
}

export default App;
