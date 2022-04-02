import React from 'react';
import { useForm } from 'react-hook-form';
import { LoginParams } from '../../../types/formParams';
import { FormWrap } from '../../common/form/FormWrap';
import { InputDom } from '../../common/form/InputDom';
import { InputLabel } from '../../common/InputLabel';
import { useSignUp } from '../../hooks/useSignUp';
import { ModalFooterContent } from '../modalInner/ModalFooterContent';
import { ModalHeaderContent } from '../modalInner/ModalHeaderContent';
import { ModalInputBox } from '../ModalInputBox';

export type LoginFormInput = {
  email: string;
  password: string;
};

type Props = {
  modalClose: VoidFunction;
};
export const SignUp = (props: Props) => {
  const methods = useForm<LoginFormInput>();
  const {
    register,
    formState: { errors },
  } = methods;
  const [isLoading, onSubmit, error] = useSignUp(methods, props.modalClose);
  return (
    <div className='p-4'>
      <FormWrap<LoginParams> onSubmit={onSubmit}>
        {({ register }) => (
          <>
            <ModalHeaderContent modalHeader={'Sign up your account'} onClick={props.modalClose} />
            <div>
              <ModalInputBox>
                <InputLabel forText='email' text='emailaddress' />
                <InputDom
                  id='email'
                  type='email'
                  placeholder='メールアドレスを入力してください'
                  regist={register('email', {
                    required: 'メールアドレスは必須です。',
                    pattern: {
                      value:
                        /^([a-zA-Z0-9])+([a-zA-Z0-9\._+-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/,
                      message: 'メールアドレスの形式が間違っています',
                    },
                  })}
                />
              </ModalInputBox>
              <ModalInputBox>
                <InputLabel forText='password' text='password' />
                <InputDom
                  id='password'
                  type='password'
                  placeholder='パスワードを入力してください'
                  regist={register('password', { required: true, pattern: /^[a-z\d]{2,100}$/i })}
                />
              </ModalInputBox>
            </div>
            <ModalFooterContent
              isLoading={isLoading}
              text={'サインアップ'}
              modalClose={props.modalClose}
            />
          </>
        )}
      </FormWrap>
    </div>
  );
};
