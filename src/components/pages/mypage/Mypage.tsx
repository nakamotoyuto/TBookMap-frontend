import React from 'react';
import Auth from '../../layout/Auth';
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
