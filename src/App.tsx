import React from 'react';
import './App.css';
//Backgoround
import {Background} from './components/index'
///Stepper
import {MultiStepper} from './components/index';

function App() {
  return (
    <div>
      <Background />
    <MultiStepper />
    </div>
  );
}

export default App;
