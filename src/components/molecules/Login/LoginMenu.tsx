import React from 'react';

import { useDisclosure } from '@chakra-ui/hooks';
import Icon from '@chakra-ui/icon';
import { MenuItem } from '@chakra-ui/menu';
import { BiLogIn } from 'react-icons/bi';

import { AuthContent } from '../modalInner/AuthContent';
import { ModalDom } from '../../common/modal/Modal';

export const LoginMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <MenuItem onClick={onOpen} icon={<Icon as={BiLogIn} />}>ログイン</MenuItem>
      <ModalDom isOpen={isOpen}>
        <AuthContent modalClose={onClose} />
      </ModalDom>
    </>
  );
};
