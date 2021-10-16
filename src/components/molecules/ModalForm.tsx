import { FormErrorMessage } from '@chakra-ui/form-control'
import { Box } from '@chakra-ui/layout'
import { ModalBody, ModalCloseButton, ModalHeader } from '@chakra-ui/modal'
import { css, jsx } from '@emotion/react'
import React from 'react'
import { UseFormReturn } from 'react-hook-form'
import { InputDom } from '../atoms/InputDom'
import { InputLabel } from '../atoms/InputLabel'
import { ModalFooterContent } from './modalInner/ModalFooterContent'
import { ModalInputBox } from './ModalInputBox'

type Props = {
  data: {
    modalHeader: string,
    methods: UseFormReturn<any>,
    onSubmit: (data: any) => Promise<void>
    submitText: string,
    modalClose: VoidFunction,
    isLoading: boolean
  }
}

export const ModalForm = (props: Props) => {

  const { modalHeader, methods, onSubmit, submitText, modalClose, isLoading } = props.data
  const { handleSubmit, register, formState: { errors } } = methods

  return (
    <Box p={4}>
      <ModalHeader pl={0} pr={0} pt={4} pb={4}>{modalHeader}</ModalHeader>
      <ModalCloseButton />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalBody>
          {/* {error && <Text css={errorMessage}>メールアドレスもしくはパスワードが違います。</Text>} */}
          <ModalInputBox errors={errors.email}>
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
          <ModalInputBox errors={errors.password}>
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
        </ModalBody>
        <ModalFooterContent isLoading={isLoading} text={submitText} modalClose={ modalClose}/>
      </form>
    </Box>
  )
}

const errorMessage = css`
  display: block;
  margin-bottom: 15px;
  font-size: 14px;
  color: #E53E3E;
`
