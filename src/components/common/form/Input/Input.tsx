import React, { HTMLInputTypeAttribute } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  id: string,
  regist: UseFormRegisterReturn,
  type: HTMLInputTypeAttribute,
  placeholder: string,
}

export const Input = (props: Props) => {
  const {id, type, regist, placeholder} = props;
  return (
    <input
      type={type}
      id={id}
      autoComplete={type}
      placeholder={placeholder}
      {...regist}
    />
  );
};
