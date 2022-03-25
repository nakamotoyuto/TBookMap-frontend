import React from 'react';
import { BiUserPlus } from 'react-icons/bi';

import { SignUpContent } from '../modalInner/SignUpContent';
import { ModalDom } from '../../common/modal/Modal';
import { useDisclosure } from '../../hooks/useDisclosure';

export const SignUpMenu = () => {
  const [ isOpen, onOpen, onClose ] = useDisclosure();

  return (
    <>
      <button type="button" onClick={onOpen}>
        <BiUserPlus />
        <span>サインアップ</span>
      </button>
      <ModalDom isOpen={isOpen} >
        <SignUpContent modalClose={onClose} />
      </ModalDom>
    </>
  );
};
