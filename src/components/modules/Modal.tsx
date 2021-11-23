import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';
import React, { useState } from 'react'

type Props = {
  modal: boolean,
  modalClose: () => void
}

export const ModalBox: React.FC<Props> = (props) => {

  return (
    <>
      <Modal
        onClose={props.modalClose}
        isOpen={props.modal}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          {props.children}
        </ModalContent>
      </Modal>
    </>
  )
};
