import React from 'react';
import { BiLogIn } from 'react-icons/bi';

import { AuthContent } from '../modalInner/AuthContent';
import { ModalDom } from '../../common/modal/Modal';
import { useDisclosure } from '../../hooks/useDisclosure';

export const LoginMenu = () => {
  const [ isOpen, onOpen, onClose ] = useDisclosure();

  return (
    <>
      <button type="button" onClick={onOpen}>
        <BiLogIn />
        <span>ログイン</span>
      </button>
      <ModalDom isOpen={isOpen}>
        <AuthContent modalClose={onClose} />
      </ModalDom>
    </>
  );
};
