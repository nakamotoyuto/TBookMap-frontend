import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react'

export const useModal = () => {
  const [modal, setModal] = useState(false)

  const modalOpen = () => {
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

  return (
    <>
      <Modal onClose={props.modalClose} isOpen={props.modal} isCentered>
        <ModalOverlay />
        <ModalContent>
          {props.children}
        </ModalContent>
      </Modal>
    </>
  )
};
