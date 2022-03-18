import dynamic from 'next/dynamic';
import React from 'react';
import { MypageForm } from '../../src/components/organisms/MypageForm';
const Auth = dynamic(
  () => import('../../src/components/layout/Auth'),
  { ssr: false }
);


export default function Mypage() {
  return (
    <Auth>
      <div>
        <MypageForm />
      </div>
    </Auth>
  );
}
