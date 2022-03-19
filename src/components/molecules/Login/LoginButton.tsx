import React, { useState } from 'react';
import { ModalBox } from '../../modules/Modal';
import { AuthContent } from '../modalInner/AuthContent';
import { Button, useDisclosure } from "@chakra-ui/react";

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
