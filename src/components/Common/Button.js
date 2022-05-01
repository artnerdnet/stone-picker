import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
  background: #f9cf2d;
  border: none;
  padding: 8px;
  border-radius: 5px;
  text-transform: lowercase;
  margin: 4px;
  :hover {
    background: #ffe994
  }
`

export const Button = ({children, clickHandler}) => <StyledButton onClick={clickHandler}> {children} </StyledButton>

