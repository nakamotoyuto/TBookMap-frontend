import { FormErrorMessage } from '@chakra-ui/form-control';
import React from 'react'
import { useForm } from 'react-hook-form'
import { InputDom } from '../../atoms/InputDom';
import { InputLabel } from '../../atoms/InputLabel';
import { useLogin } from '../../modules/customhooks/useLogin';
import { ModalForm } from '../ModalForm';
import { ModalInputBox } from '../ModalInputBox';

export type LoginFormInput = {
  email: string,
  password: string,
}

type Props = {
  modalClose: VoidFunction
}

export const Login = (props: Props) => {
  const methods = useForm<LoginFormInput>();
  const { register, formState: {errors} } = methods
  const [isLoading, onSubmit, error] = useLogin(methods, props.modalClose)

  const data = {
    modalHeader: 'Sign in your account',
    onSubmit: onSubmit,
    submitText: 'ログイン',
    modalClose: props.modalClose,
    isLoading: isLoading,
    formParamsKey: "loginType" as const
  }
  return (
    <ModalForm data={data}>
      <ModalInputBox errors={errors.email ? true : false}>
        <InputLabel forText="email" text="emailaddress" />
        <InputDom
          id="email"
          type="email"
          placeholder="メールアドレスを入力してください"
          regist={register("email", {
            required: "メールアドレスは必須です。", pattern: {
              value: /^([a-zA-Z0-9])+([a-zA-Z0-9\._+-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/,
              message: "メールアドレスの形式が間違っています"
            }
          })}
        />
        {errors.email && errors.email.type === "required" && <FormErrorMessage role="alert">必須項目になります</FormErrorMessage>}
        {errors.email && errors.email.type === "pattern" &&  <FormErrorMessage role="alert">メールアドレスの形式が間違っています</FormErrorMessage>}
      </ModalInputBox>
      <ModalInputBox errors={errors.password ? true : false}>
        <InputLabel forText="password" text="password" />
        <InputDom
          id="password"
          type="password"
          placeholder="パスワードを入力してください"
          regist={register("password",
            { required: true, pattern: /^[a-z\d]{2,100}$/i })
          }
        />
        {errors.password && errors.password.type === "required" && <FormErrorMessage role="alert">必須項目になります</FormErrorMessage>}
        {errors.password && errors.password.type === "pattern" && <FormErrorMessage role="alert">半角英数字で入力お願いします</FormErrorMessage>}
      </ModalInputBox>
    </ModalForm>
  )
}