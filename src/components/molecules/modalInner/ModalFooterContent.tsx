import React from 'react';
import { Button } from '../../common/button/Button';

type Props = {
  modalClose: VoidFunction;
  isLoading: boolean;
  text: string;
};

export const ModalFooterContent = (props: Props) => {
  const { modalClose, text } = props;
  return (
    <div>
      <Button className='mr-3 max-w-250' onClick={modalClose} text='Close' />
      <Button type='submit' className=' max-w-250 bg-main text-white' text={text} />
    </div>
  );
};
