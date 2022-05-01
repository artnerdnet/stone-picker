import React from 'react'
import { ToolbarWrapper } from './ToolbarWrapper';
import { StoneSelector } from '../Stone/StoneSelector/StoneSelector';
import { Screenshot } from '../Screenshot/Screenshot';
import { Importer } from '../JSONHandler/Importer';
import { Exporter } from '../JSONHandler/Exporter';
import { Reset } from '../Reset/Reset';
import styled from 'styled-components';

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

export const Toolbar = ({ currentRef }) => (
  <ToolbarWrapper>
    <StyledButtonWrapper>
      <Screenshot currentRef={currentRef} />
      <Importer />
      <Exporter />
      <Reset />
    </StyledButtonWrapper>
    <StoneSelector />
  </ToolbarWrapper>
)
