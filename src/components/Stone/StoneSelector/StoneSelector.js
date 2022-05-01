import styled from 'styled-components';
import { useDataContext } from '../../../context/context.js';
import { AllStones, getStoneImage, getStoneToolbarSize } from '../utils';

const StyledImage = styled.img`
  width: ${(props) => getStoneToolbarSize(props.size)};
  padding: 10px;
  cursor: pointer;
`
const StyledStoneSelector = styled.div`
  padding: 12px
`;

export const StoneSelector = () => {
  const { setDataContext, dataContext } = useDataContext();
  const addStone = (size, image) => {
    const newStone = {
      top: 20,
      left: 20,
      size,
      image,
      label: null,
    }
    dataContext[Math.floor(Math.random() * 100)] = newStone;
    setDataContext({...dataContext })
  }

  return (
    <StyledStoneSelector>
      {AllStones.map(size => <StyledImage alt={`Add ${size} stone`} size={size} onClick={()=>addStone(size, getStoneImage(size))} src={getStoneImage(size)}/>)}
    </StyledStoneSelector>
  )
}
