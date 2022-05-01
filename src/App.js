import React, { createRef } from 'react'
import './App.css';
import {Container} from './components/Canvas/Containter'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Toolbar } from './components/Toolbar/Toolbar';
import { StoneSelector } from './components/Stone/StoneSelector/StoneSelector';
import { Screenshot } from './components/Screenshot/Screenshot';

function App() {
  const ref = createRef(null)


  return (
    <div className="App">
        <div ref={ref}>
          <DndProvider  backend={HTML5Backend}>
            <Container/>
            <Toolbar>
              <Screenshot currentRef={ref} />
              <StoneSelector />
            </Toolbar>
          </DndProvider>
        </div>
    </div>
  );
}

export default App;
