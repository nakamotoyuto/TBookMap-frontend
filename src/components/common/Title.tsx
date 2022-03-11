import { Heading } from '@chakra-ui/layout';
import React from 'react';

type Props = {
  title: string
}

export const Title = ({title}: Props ) => {
  return (
    <h2 className='
      text-2xl
      leading-tight
      font-bold
    '>
      {title}
    </h2>
  );
};
