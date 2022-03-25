import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode
}

export const ModalInputBox = ({ children }: Props) => {

  return (
    <div className=' w-full mb-7 flex flex-col gap-2 text-left text-lg font-bold'>
      {children}
    </div>
  );
};
