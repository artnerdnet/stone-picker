import { useState } from 'react';
import styled from 'styled-components';
import { useDataContext } from '../../context/context.js';
import { StoneImage } from './StoneImage';

const StyledLabel = styled.input`
  margin: 8px 0;
  padding: 8px;
  text-transform: uppercase;
  text-align: center;
`

const StyledCloseIcon = styled.span`
  font-size: 12px;
  position: absolute;
  top: 0;
  right: 0;
  padding: 4px;
`

export const Stone = ({ size = 'm', id = null}) => {
  const [label, setLabel] = useState(null);
  const { dataContext, setDataContext } = useDataContext();

  const removeStone = () => {
    const dataContextUpdated = {...dataContext}
    delete dataContextUpdated[id];
    setDataContext(dataContextUpdated)
  }
  return (
    <div>
      <StyledCloseIcon onClick={removeStone} >&#10006;</StyledCloseIcon>
      <StyledLabel type="text" id={`fStoneLabel${id}`} name={`fStoneLabel${id}`} defaultValue={label} onChange={e => setLabel(e.target.value)} />
      <StoneImage size={size} />
    </div>
  )
}
