import React, { useEffect } from 'react'
import { useScreenshot, createFileName } from 'use-react-screenshot'
import { Button } from '../Common/Button';

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
    <Button clickHandler={getImage}>
      Save landscape
    </Button>
  );
}
