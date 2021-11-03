import { FormErrorMessage } from '@chakra-ui/form-control';
import { Box } from '@chakra-ui/layout';
import { ModalBody } from '@chakra-ui/modal';
import React from 'react'
import { useForm } from 'react-hook-form'
import { LoginParams } from '../../../types/formParams';
import { FormWrap } from '../../atoms/FormWrap';
import { InputDom } from '../../atoms/InputDom';
import { InputLabel } from '../../atoms/InputLabel';
import { useSignUp } from '../../modules/customhooks/useSignUp';
import { ModalFooterContent } from '../modalInner/ModalFooterContent';
import { ModalHeaderContent } from '../modalInner/ModalHeaderContent';
import { ModalInputBox } from '../ModalInputBox';

export type LoginFormInput = {
  email: string,
  password: string,
}

type Props = {
  modalClose: VoidFunction
}
export const SignUp = (props: Props) => {
  const methods = useForm<LoginFormInput>();
  const { register, formState: {errors} } = methods
  const [isLoading, onSubmit, error] = useSignUp(methods, props.modalClose)
  return (
    <Box p={4}>
      <FormWrap<LoginParams> onSubmit={onSubmit} >
        {({ register }) => (
          <>
            <ModalHeaderContent modalHeader={'Sign in your account'}/>
              <ModalBody>
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
              </ModalBody>
            <ModalFooterContent isLoading={isLoading} text={'サインアップ'} modalClose={props.modalClose}/>
          </>
        )}
      </FormWrap>
    </Box>
  )
}
