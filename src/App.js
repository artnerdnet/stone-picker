import './App.css';
import {Container} from './components/Canvas/Containter'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Toolbar } from './components/Toolbar/Toolbar';

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Container />
        <Toolbar/>
      </DndProvider>
    </div>
  );
}

export default App;
