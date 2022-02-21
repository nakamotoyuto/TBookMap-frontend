import { Box, FormControl, FormLabel, Input } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import React from 'react';
import { MypageForm } from '../../src/components/organisms/MypageForm';
const Auth = dynamic(
  () => import('../../src/components/organisms/Auth'),
  { ssr: false }
);


export default function Mypage() {
  return (
    <Auth>
      <Box>
        <MypageForm />
      </Box>
    </Auth>
  );
}
