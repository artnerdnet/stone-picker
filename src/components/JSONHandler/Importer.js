import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { Button } from '../Common/Button';
import { Close } from '../Common/Close';
import { useDataContext } from '../../context/context';
import { fileToJSON } from './utils';
import { getStoneImage } from '../Stone/utils';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement(document.getElementById('modal'));

export const Importer = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(undefined);
  const { setDataContext } = useDataContext();

  useEffect(() => {
    if (selectedFile) {
      Object.keys(selectedFile).forEach(item => {
        selectedFile[item].image = getStoneImage(selectedFile[item].size)
      })
      setDataContext(selectedFile)
    }
  }, [selectedFile, setDataContext])

  const handleUpload = (file) => {
    fileToJSON(file).then(json => setSelectedFile(json)).finally(() => {
      setIsOpen(false)
    })
  }

  return (
    <>
      <Button clickHandler={()=>setIsOpen(true)}>Import</Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={()=>setIsOpen(false)}
        style={customStyles}
        contentLabel="Import Modal"
      >
        <Close clickHandler={()=>setIsOpen(false)} />
        <form method="post" encType="multipart/form-data">
          <div>
            <label htmlFor="json">Choose file to upload</label>
            <input type="file" id="json" name="json" accept=".json" onChange={(e) => handleUpload(e.target.files[0])}/>
          </div>
        </form>
      </Modal>
    </>
  );
}
