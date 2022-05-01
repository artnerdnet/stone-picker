import styled from 'styled-components';

const StyledToolbar = styled.div`
  background: #FFFFFF;
  border-radius: 4px;
  bottom: 0;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-flow: column wrap;
  left: 0;
  margin: 0 auto;
  min-width: fit-content;
  padding: 8px 24px;
  position: fixed;
  right: 0;
  width: max-content;
`;

export const ToolbarWrapper = ({children}) => (
  <StyledToolbar>
    {children}
  </StyledToolbar>
)
