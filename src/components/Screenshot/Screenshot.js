import React, { useEffect } from 'react'
import { useScreenshot, createFileName } from 'use-react-screenshot'
import styled from 'styled-components';

const StyledButton = styled.button`
  background: #f9cf2d;
  border: none;
  padding: 8px;
  border-radius: 5px;
  text-transform: lowercase;
`

export const Screenshot = ({currentRef}) => {
  const [image, takeScreenshot] = useScreenshot()
  const getImage = () => takeScreenshot(currentRef.current)
  const download = (image, { name = 'img', extension = 'png' } = {}) => {
    const a = document.createElement('a')
    a.href = image
    a.download = createFileName(extension, name)
    a.click()
  }

  useEffect(() => {
    if (image) {
      download(image, { name: 'landscape', extension: 'png' })
    }
  }, [image])


  return (
    <StyledButton onClick={getImage}>
      Save landscape
    </StyledButton>
  );
}
