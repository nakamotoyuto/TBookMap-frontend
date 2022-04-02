import React from 'react';
import { Button } from '../common/button/Button';

export const BookRequestButton = () => {
  const openRequestModal = () => {
    console.log('test');
  };
  return (
    <div>
      <Button
        className='max-w-120 bg-main text-white'
        onClick={openRequestModal}
        text='本リクエスト'
      />
    </div>
  );
};
