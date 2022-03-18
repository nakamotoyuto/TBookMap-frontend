import { Button } from '@chakra-ui/react';
import React from 'react';

export const BookRequestButton = () => {
  const openRequestModal = () => {
    console.log('test');
  };
  return (
    <div>
      <Button maxWidth='120px' backgroundColor={`#EB7F31`} color={`#ffffff`} onClick={openRequestModal}>本リクエスト</Button>
    </div>
  );
};
