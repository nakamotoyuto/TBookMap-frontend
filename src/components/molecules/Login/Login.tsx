import { FormControl, FormErrorMessage } from '@chakra-ui/form-control';
import { Box } from '@chakra-ui/layout';
import { ModalBody, ModalHeader } from '@chakra-ui/modal';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FormParamsData, LoginParams } from '../../../types/formParams';
import { FormWrap } from '../../atoms/FormWrap';
import { InputDom } from '../../atoms/InputDom';
import { InputLabel } from '../../common/InputLabel';
import { useLogin } from '../../hooks/useLogin';
import { ModalFooterContent } from '../modalInner/ModalFooterContent';
import { ModalHeaderContent } from '../modalInner/ModalHeaderContent';
import { ModalInputBox } from '../ModalInputBox';

type Props = {
  modalClose: VoidFunction
}

export const Login = (props: Props) => {
  const methods = useForm<LoginParams>();
  const { formState: {errors} } = methods;
  const [isLoading, onSubmit, error] = useLogin(methods, props.modalClose);

  return (
    <Box p={4}>
      <FormWrap<LoginParams> onSubmit={onSubmit} >
        {({ register }) => (
          <>
            <ModalHeaderContent modalHeader={'Sign in your account'}/>
              <ModalBody>
                <ModalInputBox errors={errors.email ? true : false} id="email">
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
                <ModalInputBox errors={errors.password ? true : false} id="passwords">
                  <InputLabel forText="password" text="passwords" />
                  <InputDom
                    id="passwords"
                    type="password"
                    placeholder="パスワードを入力してください"
                    regist={register("password",
                      { required: true, pattern: /^[a-z\d]{2,100}$/i })
                    }
                  />
                {
                  errors.password
                  && errors.password.type === "required"
                  && <FormErrorMessage role="alert">必須項目になります</FormErrorMessage>
                }
                {
                  errors.password
                  && errors.password.type === "pattern"
                  && <FormErrorMessage role="alert">半角英数字で入力お願いします</FormErrorMessage>
                }
                </ModalInputBox>
              </ModalBody>
            <ModalFooterContent
              isLoading={isLoading}
              text={'ログイン'}
              modalClose={props.modalClose}
            />
            </>
          )}
      </FormWrap>
    </Box>
  );
};