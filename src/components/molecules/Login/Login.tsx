import React from 'react';
import { useForm } from 'react-hook-form';
import { FormParamsData, LoginParams } from '../../../types/formParams';
import { FormWrap } from '../../common/form/FormWrap';
import { InputDom } from '../../common/form/InputDom';
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
    <div className='p-4'>
      <FormWrap<LoginParams> onSubmit={onSubmit} >
        {({ register }) => (
          <>
            <ModalHeaderContent modalHeader={'Sign in your account'} onClick={ props.modalClose}/>
              <div>
                <ModalInputBox>
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
                </ModalInputBox>
                <ModalInputBox>
                  <InputLabel forText="password" text="passwords" />
                  <InputDom
                    id="passwords"
                    type="password"
                    placeholder="パスワードを入力してください"
                    regist={register("password",
                      { required: true, pattern: /^[a-z\d]{2,100}$/i })
                    }
                  />
                </ModalInputBox>
              </div>
            <ModalFooterContent
              isLoading={isLoading}
              text={'ログイン'}
              modalClose={props.modalClose}
            />
            </>
          )}
      </FormWrap>
    </div>
  );
};
