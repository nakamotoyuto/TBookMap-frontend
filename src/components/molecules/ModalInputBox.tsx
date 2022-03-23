import { FormControl } from '@chakra-ui/form-control';
import { Box } from '@chakra-ui/layout';
import React from 'react';

type Props = {
  errors: boolean
  id: string
}

export const ModalInputBox:React.FC<Props> = (props) => {

  const { errors, id, children } = props;

  return (
    <FormControl isInvalid={errors} id={id}>
      <div className=' w-full mb-7 flex flex-col gap-2 text-left text-lg font-bold'>
        {children}
      </div>
    </FormControl>
  );
};
