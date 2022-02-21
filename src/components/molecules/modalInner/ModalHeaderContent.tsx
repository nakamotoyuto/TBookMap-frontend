import { ModalHeader, ModalCloseButton } from '@chakra-ui/modal';
import React from 'react';

type Props = {
  modalHeader: string
}

export const ModalHeaderContent = ({modalHeader}: Props) => {
  return (
    <>
      <ModalHeader pl={0} pr={0} pt={4} pb={4} d="flex" justifyContent="space-between">
        {modalHeader}
        <ModalCloseButton />
      </ModalHeader>
    </>
  );
};
