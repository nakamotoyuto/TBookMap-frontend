import React, { MouseEventHandler } from 'react';

type Props = {
  modalHeader: string
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const ModalHeaderContent = ({ modalHeader, onClick }: Props) => {
  return (
    <>
      <div className='pl-0 pr-0 pt-4 pb-4 flex justify-between'>
        {modalHeader}
        <button onClick={onClick}>x</button>
      </div>
    </>
  );
};
