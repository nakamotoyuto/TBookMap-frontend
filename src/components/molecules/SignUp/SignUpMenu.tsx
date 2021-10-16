import React from 'react'

import { useDisclosure } from '@chakra-ui/hooks'
import Icon from '@chakra-ui/icon'
import { MenuItem } from '@chakra-ui/menu'
import { BiUserPlus } from 'react-icons/bi'

import { ModalBox } from '../../modules/Modal'
import { SignUpContent } from '../modalInner/SignUpContent'

export const SignUpMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <MenuItem onClick={onOpen} icon={<Icon as={BiUserPlus} />}>サインアップ</MenuItem>
      <ModalBox modal={isOpen} modalClose={onClose}>
        <SignUpContent modalClose={onClose} />
      </ModalBox>
    </>
  )
}
