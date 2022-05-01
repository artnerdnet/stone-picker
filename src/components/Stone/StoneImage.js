import styled from 'styled-components';
import { getStoneWidth, getStoneImage } from './utils';

const StyledImage = styled.img`
  width: ${(props) => getStoneWidth(props.size)};
`

export const StoneImage = ({ size = 'm' }) => {
  return (
    <div>
      <StyledImage src={getStoneImage(size)} size={size} />
    </div>
  )
}
