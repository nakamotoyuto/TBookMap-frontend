import React, { ReactNode } from 'react';
import Modal from 'react-modal';

type Props = {
  isOpen: boolean;
  children: ReactNode;
};

Modal.setAppElement('#__next');

export const ModalDom = ({ isOpen, children }: Props) => {
  return <Modal isOpen={isOpen}>{children}</Modal>;
};
