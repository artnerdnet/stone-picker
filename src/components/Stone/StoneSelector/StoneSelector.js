import styled from 'styled-components';
import { useDataContext } from '../../../context/context.js';
import { AllStones, getStoneImage, getStoneToolbarSize } from '../utils';

const StyledImage = styled.img`
  width: ${(props) => getStoneToolbarSize(props.size)};
  padding: 10px;
  cursor: pointer;
`;

const StyledStoneSelector = styled.div`
  width: 100%;
  display: flex;
  padding: 12px;
  justify-content: center;
`;

const StyledSpan = styled.span`
  font-size: 24px;
  text-align: center;
  width: 100%;
  text-transform: uppercase;
  font-weight: 600;
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-flow: column nowrap;
  justify-content: flex-end;
  text-align: center;
  margin: 0 8px;
`

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
      {AllStones.map(size => {
        return (
          <StyledWrapper>
            <StyledImage 
              alt={`Add ${size} stone`} 
              size={size} 
              onClick={()=>addStone(size, getStoneImage(size))} 
              src={getStoneImage(size)}
            />
            <StyledSpan>{size}</StyledSpan>
          </StyledWrapper>
        )
      })}
    </StyledStoneSelector>
  )
}
