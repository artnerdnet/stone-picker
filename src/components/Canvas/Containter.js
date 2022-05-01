import update from 'immutability-helper'
import { useCallback, useEffect, useState } from 'react'
import { useDrop } from 'react-dnd'
import { Box } from './Box.js'
import styled from 'styled-components'
import { Stone } from '../Stone/Stone.js'
import { useDataContext } from '../../context/context.js'

const StyledContainer = styled.div`
  width: 100vw;
  height: 80vh;
`

export const Container = ({ hideSourceOnDrag }) => {
  const { dataContext, setDataContext } = useDataContext();
  const [stoneCollection, setStoneCollection] = useState({});

  useEffect(() => {
    setStoneCollection(dataContext)
  }, [dataContext])
  
  const moveBox = useCallback(
    (id, left, top) => {
      setDataContext(
        update(dataContext, {
          [id]: {
            $merge: { left, top },
          },
        }),
      )
    },
    [dataContext, setDataContext],
  )
  const [, drop] = useDrop(
    () => ({
      accept: 'box',
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset()
        const left = Math.round(item.left + delta.x)
        const top = Math.round(item.top + delta.y)
        moveBox(item.id, left, top)
        return undefined
      },
    }),
    [moveBox],
  )
  return (
    <StyledContainer ref={drop}>
      {Object.keys(stoneCollection).map((key) => {
        const { left, top, size, label } = stoneCollection[key]
        return (
          <Box
            key={key}
            id={key}
            left={left}
            top={top}
            hideSourceOnDrag={hideSourceOnDrag}
          >
            <Stone id={key} size={size} />
            {/* <StyledLabel type="text" id={`fStoneLabel${key}`} name={`fStoneLabel${key}`} defaultValue={label}/>
            <StoneImage size={size} /> */}
          </Box>
        )
      })}
    </StyledContainer>
  )
}
