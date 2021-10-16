import React from 'react'
import { useForm } from 'react-hook-form'
import { useLogin } from '../../modules/customhooks/useLogin';
import { ModalForm } from '../ModalForm';

export type LoginFormInput = {
  email: string,
  password: string,
}

type Props = {
  modalClose: VoidFunction
}

export const Login = (props: Props) => {
  const  methods = useForm<LoginFormInput>();
  const [isLoading, onSubmit, error] = useLogin(methods, props.modalClose)

  const data = {
    modalHeader: 'Sign in your account',
    methods: methods,
    onSubmit: onSubmit,
    submitText: 'ログイン',
    modalClose: props.modalClose,
    isLoading: isLoading
  }
  return (
    <ModalForm data={data}/>
  )
}