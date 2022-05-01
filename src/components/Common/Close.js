import styled from 'styled-components';

const StyledCloseIcon = styled.span`
  font-size: 12px;
  position: absolute;
  top: 0;
  right: 0;
  padding: 4px;
  cursor: pointer;
  :hover {
    color: grey
  }
`

export const Close = ({ clickHandler }) => <StyledCloseIcon onClick={clickHandler} >&#10006;</StyledCloseIcon>