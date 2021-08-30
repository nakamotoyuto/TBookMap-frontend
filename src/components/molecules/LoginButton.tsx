import React, { useState } from 'react'
import { ModalBox, useModal } from '../modules/Modal'
import { AuthContent } from './modalInner/AuthContent'
import { Button, Icon, MenuItem, useDisclosure, useMediaQuery } from "@chakra-ui/react"
import { BiSearchAlt, BiLogIn, BiUser, BiBook } from 'react-icons/bi';

export const LoginButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)")
  const openLoginModal = () => {
    onOpen()
  }

  return (
    <div>
      { isLargerThan768 ?
        <Button backgroundColor={`#EB7F31`} color={`#ffffff`} onClick={openLoginModal}>ログイン</Button>
        :
        <MenuItem onClick={openLoginModal}icon={<Icon as={BiLogIn} />}>ログイン</MenuItem>
      }
      <ModalBox modal={isOpen} maxWidth="500px" modalClose={onClose}>
        <AuthContent modalClose={onClose} />
      </ModalBox>
    </div>
  )
}
