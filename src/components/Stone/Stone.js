import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDataContext } from '../../context/context.js';
import { Close } from '../Common/Close.js';
import { StoneImage } from './StoneImage';

const StyledLabel = styled.input`
  margin: 8px 0;
  padding: 8px;
  text-transform: uppercase;
  text-align: center;
`

export const Stone = ({ size = 'm', id = null}) => {
  const [label, setLabel] = useState(null);
  const { dataContext, setDataContext } = useDataContext();

  const removeStone = () => {
    const dataContextUpdated = {...dataContext};
    delete dataContextUpdated[id];
    setDataContext(dataContextUpdated);
  }

  const updateLabel = () => {
    const dataContextUpdated = {...dataContext};
    dataContextUpdated[id].label = label;
    setDataContext(dataContextUpdated)
  };

  useEffect(() => {
    setLabel(dataContext[id]?.label)
  }, [])

  useEffect(() => {    
    if (label) {
      updateLabel()
    }
  }, [label])
  

  return (
    <div>
      <Close clickHandler={removeStone}/>
      <StyledLabel type="text" id={`fStoneLabel${id}`} name={`fStoneLabel${id}`} defaultValue={label} onChange={e => setLabel(e.target.value)} />
      <StoneImage size={size} />
    </div>
  )
}
