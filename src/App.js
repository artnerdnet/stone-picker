import React, { createRef } from 'react'
import './App.css';
import { Toolbar } from './components/Toolbar/Toolbar';
import { Canvas } from './components/Canvas/Canvas';

function App() {
  const ref = createRef(null)

  return (
    <div className="App">
      <Canvas reference={ref} />
      <Toolbar currentRef={ref} />
    </div>
  );
}

export default App;
