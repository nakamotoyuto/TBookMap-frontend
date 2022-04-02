import React from 'react';

import { HistoryItem } from '../../../../enum/history';
import { occupation } from '../../../../enum/occupation';
import { UserUpdateParams } from '../../../../types/formParams';
import { FormDefaultValueWrap } from '../../../common/form/FormWrap';
import { InputDom } from '../../../common/form/InputDom';
import { InputLabel } from '../../../common/InputLabel';
import { Title } from '../../../common/Title';
import { useMypage } from '../../../hooks/useMypage';
import { usePatchProfile } from '../../../hooks/usePatchProfile';
import { Button } from '../../../common/button/Button';
// Container層
const MypageFormContainer = () => {
  const [isLoading, userData] = useMypage();
  const [isSubmitLoading, onUpdateSubmit, error] = usePatchProfile();
  const onSubmit = (data: UserUpdateParams) => {
    onUpdateSubmit(data);
  };
  if (isLoading) return <div>loadingnow</div>;
  if (userData) {
    const defaultValues = {
      email: userData.email,
      password: userData.password,
      userinfo: {
        name: userData.userInfo.name,
        history: userData.userInfo.history,
        occupation: userData.userInfo.occupation,
      },
    };
    return (
      <MypageFormDom data={defaultValues} onSubmit={onSubmit} submitLoading={isSubmitLoading} />
    );
  }
  return <></>;
};

const MypageFormDom = ({
  data,
  onSubmit,
  submitLoading,
}: {
  data: UserUpdateParams;
  onSubmit: (data: UserUpdateParams) => void;
  submitLoading: boolean;
}) => {
  return (
    <div className='py-24'>
      <div className=' m-auto p-16 max-w-2xl rounded-xl border-2 border-gray-200 shadow-xl'>
        <Title title='Profile' />
        <FormDefaultValueWrap<UserUpdateParams> onSubmit={onSubmit} defaultValues={data}>
          {({ register }) => (
            <div className='flex flex-col gap-x-5 gap-y-0'>
              <div>
                <InputLabel forText='name' text='お名前' />
                <InputDom
                  id='name'
                  type='text'
                  placeholder='名前'
                  regist={register('userinfo.name')}
                />
              </div>
              <div>
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
              </div>
              <div>
                <InputLabel forText='password' text='password' />
                <InputDom
                  id='password'
                  type='password'
                  placeholder='パスワードを入力してください'
                  regist={register('password', { required: true, pattern: /^[a-z\d]{2,100}$/i })}
                />
              </div>
              <div>
                <InputLabel forText='history' text='エンジニア歴' />
                <div className='flex gap-2 space-24'>
                  {HistoryItem.map((item) => {
                    return (
                      <div key={item.id}>
                        <input
                          type='radio'
                          value={item.id}
                          id={item.name}
                          {...register('userinfo.history')}
                        />
                        <label>{item.name}</label>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <select {...register('userinfo.occupation')} placeholder='職歴'>
                  {occupation.map((item) => {
                    return (
                      <option key={item.name} value={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className='flex justify-end'>
                <Button type='submit' className=' max-w-250 bg-main text-white' text='保存' />
              </div>
            </div>
          )}
        </FormDefaultValueWrap>
      </div>
    </div>
  );
};

export const MypageForm = () => <MypageFormContainer />;
