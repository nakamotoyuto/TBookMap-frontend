import React, { useState } from 'react'
import Modal from 'react-modal'

export const useModal = () => {
  const [modal, setModal] = useState(false)

  const modalOpen = () => {
    console.log('test')
    setModal(true)
    return
  }

  const modalClose = () => {
    setModal(false)
  }

  return {
    modal,
    modalOpen,
    modalClose
  }
}

export const ModalBox = (props: any) => {
  Modal.setAppElement('#__next')

  const modalClose = () => {
    props.close()
  }

  return (
    <Modal
      isOpen={props.modal}
      onRequestClose={modalClose}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'rgba(227,227,227, 0.8)'
        },
        content: {
          position: 'static',
          maxWidth: props.maxWidth,
          padding: '0',
          width: '100%',
          height: 'auto',
          minHeight: '500px',
          backgroundColor: '#30444E',
          opacity: '1'
        }
      }}
    >
      {props.children}
    </Modal>
  );
};
