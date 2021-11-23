import { Button } from '@chakra-ui/button'
import { ModalFooter } from '@chakra-ui/modal'
import React from 'react'

type Props = {
  modalClose: VoidFunction,
  isLoading: boolean,
  text: string,
}

export const ModalFooterContent = (props: Props) => {
  const {modalClose, isLoading, text} = props
  return (
    <ModalFooter>
      <Button mr={3} maxWidth={250} onClick={modalClose}>Close</Button>
      <Button
        isLoading={isLoading}
        type="submit"
        maxWidth={250}
        backgroundColor={`#EB7F31`}
        color={`#ffffff`}
      >
        {text}
      </Button>
    </ModalFooter>
  )
}
