import dynamic from 'next/dynamic';
import React from 'react';
const Auth = dynamic(
  () => import('../../layout/Auth'),
  { ssr: false }
)
import { MypageForm } from './components/MypageForm';

export const MypageComponent = () => {
  return (
    <Auth>
      <div>
        <MypageForm />
      </div>
    </Auth>
  );
};
