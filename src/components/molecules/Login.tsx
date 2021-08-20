import React from 'react'
import { useForm } from 'react-hook-form'
import { Btn } from '../atoms/Button';

type loginFormInput = {
  email: string,
  password: string,
}

type Props = {
  modalClose: VoidFunction
}

export const Login = (props: Props) => {
  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<loginFormInput>();
  const onSubmit = (data: loginFormInput) => {
    console.log(data)
    props.modalClose()
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">emailaddress</label>
        <input id="email" type="email" {...register("email")} />
        <label htmlFor="password">password</label>
        <input id="password" type="password" {...register("password")} />
        <Btn title="送信" />
      </form>
    </div>
  )
}
