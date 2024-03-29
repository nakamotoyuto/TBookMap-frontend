import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  id: string;
  regist: UseFormRegisterReturn;
  type: string;
  placeholder: string;
};

export const InputDom = (props: Props) => {
  const { id, type, regist, placeholder } = props;
  return <input type={type} id={id} autoComplete={type} placeholder={placeholder} {...regist} />;
};
