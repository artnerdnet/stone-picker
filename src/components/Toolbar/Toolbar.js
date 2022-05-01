import styled from 'styled-components';
import { useDataContext } from '../../context/context';
import { AllStones, getStoneImage } from '../Stone/utils';

const calcSize = (size) => {
  switch (size) {
    case 'xs':
      return '35px'
    case 's':
      return '45px'  
    case 'm':
      return '55px'  
    case 'l':
      return '66px'  
    case 'xl':
      return '85px'  
    default:
      break;
  }
}
const StyledImage = styled.img`
  width: ${(props) => calcSize(props.size)};
  padding: 10px;
  cursor: pointer;
`
const StyledToolbar = styled.div`
  background: #FFFFFF;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  max-width: fit-content;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 8px;
`;
const StyledStoneSelector = styled.div``;

export const Toolbar = () => {
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
    <StyledToolbar>
      <StyledStoneSelector>
        {AllStones.map(size => <StyledImage alt={`Add ${size} stone`} size={size} onClick={()=>addStone(size, getStoneImage(size))} src={getStoneImage(size)}/>)}
      </StyledStoneSelector>
    </StyledToolbar>
  )
}
