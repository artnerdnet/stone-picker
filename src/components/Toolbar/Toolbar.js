import styled from 'styled-components';

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

export const Toolbar = ({children}) => {
  return (
    <StyledToolbar>
      {children}
    </StyledToolbar>
  )
}
