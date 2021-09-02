import { Button, FormControl, ModalBody, ModalCloseButton, ModalFooter, ModalHeader, Input, FormLabel, Box, FormErrorMessage } from '@chakra-ui/react';
import { isLocalURL } from 'next/dist/shared/lib/router/router';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { LoginActions } from '../../../store/user/user';
import { loginAuth } from './auth';
import Cookies from 'js-cookie'

type loginFormInput = {
  email: string,
  password: string,
}

type Props = {
  modalClose: VoidFunction
}


export const Login = (props: Props) => {
  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<loginFormInput>();
  const [isLoging, setIsLoading] = useState<boolean>(false)
  const loginAction = LoginActions.useLoginUser()
  useEffect(() => {
    return () => {
      setIsLoading(false)
    }
  }, [])
  const onSubmit = async (data: loginFormInput) => {
    setIsLoading(true)
    loginAuth(data)
      .then(function (response) {
        if (response.status === 200) {
          loginAction.isLogin(true)
          loginAction.user(response.data.data)
          Cookies.set('sansakuToken', response.data.data.token)
          setIsLoading(false)
          props.modalClose()
          return
        }
      })
      .catch(function (err) {
        setIsLoading(false)
        console.log(err)
      })
    reset()
  }
  return (
    <Box p={4}>
      <ModalHeader pl={0} pr={0} pt={4} pb={4}>Sign in your account</ModalHeader>
      <ModalCloseButton />
      <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
          <FormControl isInvalid={errors.email ? true : false}>
            <Box w={"100%"} mb={`30px`} d="flex" flexDirection="column" gap="10px" textAlign="left" fontSize="18px" fontWeight="bold">
              <FormLabel htmlFor="email">emailaddress</FormLabel>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="メールアドレスを入力してください"
                {...register("email", { required:"メールアドレスは必須です。", pattern: { 
                  value: /^([a-zA-Z0-9])+([a-zA-Z0-9\._+-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/,
                  message: "メールアドレスの形式が間違っています"
                }})}
              />
              {errors.email && errors.email.type === "required" && <FormErrorMessage role="alert">必須項目になります</FormErrorMessage>}
              {errors.email && errors.email.type === "pattern" &&  <FormErrorMessage role="alert">メールアドレスの形式が間違っています</FormErrorMessage>}
            </Box>
            </FormControl>
            <FormControl isInvalid={errors.password ? true : false}>
            <Box w={"100%"} mb={`30px`} d="flex" flexDirection="column" gap="10px" textAlign="left" fontSize="18px" fontWeight="bold">
              <FormLabel htmlFor="password">password</FormLabel>
              <Input
                id="password"
                type="password"
                autoComplete="password"
                placeholder="パスワードを入力してください"
                {...register("password", { required: true, pattern: /^[a-z\d]{2,100}$/i })}
              />
              {errors.password && errors.password.type === "required" && <FormErrorMessage role="alert">必須項目になります</FormErrorMessage>}
              {errors.password && errors.password.type === "pattern" && <FormErrorMessage role="alert">半角英数字で入力お願いします</FormErrorMessage>}
            </Box>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button isLoading={isLoging} type="submit" maxWidth={250} mr={3} backgroundColor={`#EB7F31`} color={`#ffffff`}>ログイン</Button>
            <Button onClick={props.modalClose}>Close</Button>
          </ModalFooter>
      </form>
    </Box>
  )
}