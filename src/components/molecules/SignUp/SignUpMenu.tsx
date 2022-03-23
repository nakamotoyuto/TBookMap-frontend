import React from 'react';

import { useDisclosure } from '@chakra-ui/hooks';
import Icon from '@chakra-ui/icon';
import { MenuItem } from '@chakra-ui/menu';
import { BiUserPlus } from 'react-icons/bi';

import { SignUpContent } from '../modalInner/SignUpContent';
import { ModalDom } from '../../common/modal/Modal';

export const SignUpMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <MenuItem onClick={onOpen} icon={<Icon as={BiUserPlus} />}>サインアップ</MenuItem>
      <ModalDom isOpen={isOpen} >
        <SignUpContent modalClose={onClose} />
      </ModalDom>
    </>
  );
};
