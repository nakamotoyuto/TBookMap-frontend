import React from 'react'

import { useDisclosure } from '@chakra-ui/hooks'
import Icon from '@chakra-ui/icon'
import { MenuItem } from '@chakra-ui/menu'
import { BiLogIn } from 'react-icons/bi'

import { ModalBox } from '../../modules/Modal'
import { AuthContent } from '../modalInner/AuthContent'

export const LoginMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <MenuItem onClick={onOpen} icon={<Icon as={BiLogIn} />}>ログイン</MenuItem>
      <ModalBox modal={isOpen} modalClose={onClose}>
        <AuthContent modalClose={onClose} />
      </ModalBox>
    </>
  )
}
