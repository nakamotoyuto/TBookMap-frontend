import React, { useState } from 'react';
import { AuthContent } from '../modalInner/AuthContent';
import { Button, useDisclosure } from "@chakra-ui/react";
import { ModalDom } from '../../common/modal/Modal';

export const LoginButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const openLoginModal = () => {
    onOpen();
  };

  return (
    <div>
      <Button maxWidth='120px' w='120px' backgroundColor={`#EB7F31`} color={`#ffffff`} onClick={openLoginModal}>ログイン</Button>
      <ModalDom isOpen={isOpen}>
        <AuthContent modalClose={onClose} />
      </ModalDom>
    </div>
  );
};
