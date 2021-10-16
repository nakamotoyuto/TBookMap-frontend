import React from 'react'
import { useForm } from 'react-hook-form'
import { useSignUp } from '../../modules/customhooks/useSignUp';
import { ModalForm } from '../ModalForm';

export type LoginFormInput = {
  email: string,
  password: string,
}

type Props = {
  modalClose: VoidFunction
}
export const SignUp = (props: Props) => {
  const  methods = useForm<LoginFormInput>();
  const [isLoading, onSubmit, error] = useSignUp(methods, props.modalClose)
  const data = {
    modalHeader: 'Sign up your account',
    methods: methods,
    onSubmit: onSubmit,
    submitText: 'サインアップ',
    modalClose: props.modalClose,
    isLoading: isLoading
  }
  return (
    <ModalForm data={data}/>
  )
}
