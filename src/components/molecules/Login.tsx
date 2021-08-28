import { Button, FormControl, ModalBody, ModalCloseButton, ModalFooter, ModalHeader, Input, FormLabel, Box } from '@chakra-ui/react';
import { css, jsx } from '@emotion/react';
import React from 'react'
import { useForm } from 'react-hook-form'

type loginFormInput = {
  email: string,
  password: string,
}

type Props = {
  modalClose: VoidFunction
}

const FormBox = css`
  padding: 40px;
  width: 100%;
  text-align: center;
  & h2{
    margin-bottom: 40px;
    font-size: 24px;
  }
`

const InputBox = css`
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
  font-size: 18px;
  font-weight: bold;
`

// const Input = css`
//   margin-top: 10px;
//   padding: 10px 14px;
//   width: 100%;
//   height: 35px;
//   border: 1px solid #B2B2B2;
//   border-radius: 10px;
//   outline: none;
//   &:focus{
//     border: 1px solid #EB7F31;
//   }
// `





export const Login = (props: Props) => {
  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<loginFormInput>();
  const onSubmit = (data: loginFormInput) => {
    reset()
    props.modalClose()
  }

  const spanAlert = css`
  color: red;
  font-size: 10px;
`
  return (
    <Box p={4}>
      <ModalHeader pl={0} pr={0} pt={4} pb={4}>Sign in your account</ModalHeader>
      <ModalCloseButton />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <ModalBody>
            <div css={InputBox}>
              <FormLabel htmlFor="email">emailaddress</FormLabel>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                aria-invalid={errors.email ? "true" : "false"}
                placeholder="メールアドレスを入力してください"
                {...register("email", { required: true, pattern: /^([a-zA-Z0-9])+([a-zA-Z0-9\._+-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/ })}
              // css={Input}
              />
              {errors.email && errors.email.type === "required" && <span css={spanAlert} role="alert">必須項目になります</span>}
              {errors.email && errors.email.type === "pattern" && <span css={spanAlert} role="alert">メールアドレスの形式が間違っています</span>}
            </div>
            <div css={InputBox}>
              <FormLabel htmlFor="password">password</FormLabel>
              <Input
                id="password"
                type="password"
                autoComplete="password"
                aria-invalid={errors.password ? "true" : "false"}
                placeholder="パスワードを入力してください"
                {...register("password", { required: true, pattern: /^[a-z\d]{1,100}$/i })}
              // css={Input}
              />
              {errors.password && errors.password.type === "required" && <span css={spanAlert} role="alert">必須項目になります</span>}
              {errors.password && errors.password.type === "pattern" && <span css={spanAlert} role="alert">半角英数字で入力お願いします</span>}
            </div>
          </ModalBody>
          <ModalFooter>
            <Button maxWidth={250} mr={3} backgroundColor={`#EB7F31`} color={`#ffffff`}>ログイン</Button>
            <Button onClick={props.modalClose}>Close</Button>
          </ModalFooter>
        </FormControl>
      </form>
    </Box>
  )
}
