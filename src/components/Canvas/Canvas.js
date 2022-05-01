import React from 'react'
import { Container } from './Containter'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export const Canvas = ({ reference }) => {
  return (
    <div ref={reference}>
      <DndProvider backend={HTML5Backend}>
        <Container />
      </DndProvider>
    </div>
  );
}