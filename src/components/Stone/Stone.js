import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDataContext } from '../../context/context.js';
import { Close } from '../Common/Close.js';
import { StoneImage } from './StoneImage';

const StyledLabel = styled.input`
  font-size: 10px;
  margin: 8px 0;
  padding: 8px;
  text-align: center;
  text-transform: uppercase;
  height: 18px;
  width: 85%;
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
