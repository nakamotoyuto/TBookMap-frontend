import React, { useState } from 'react';
import { ModalBox } from '../../modules/Modal';
import { AuthContent } from '../modalInner/AuthContent';
import { Box, Button, Icon, MenuItem, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { BiSearchAlt, BiLogIn, BiUser, BiBook } from 'react-icons/bi';

export const LoginButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const openLoginModal = () => {
    onOpen();
  };

  return (
    <div>
      <Button maxWidth='120px' w='120px' backgroundColor={`#EB7F31`} color={`#ffffff`} onClick={openLoginModal}>ログイン</Button>
      <ModalBox modal={isOpen} modalClose={onClose}>
        <AuthContent modalClose={onClose} />
      </ModalBox>
    </div>
  );
};
