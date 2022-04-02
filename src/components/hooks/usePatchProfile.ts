import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { LoginActions } from '../../store/user/user';
import { UserUpdateParams } from '../../types/formParams';
import { fetchPatch } from '../../util/fetch';
import { useTokenCheck } from '../../util/useTokenCheck';

export const usePatchProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const token = useTokenCheck('/');
  const loginAction = LoginActions.useLoginUser();

  const updateUser = async (formData: UserUpdateParams, token: string) => {
    const data = {
      url: 'userInfo/update',
      token: token,
      data: formData,
    };
    const res = fetchPatch(data);
    return res;
  };

  const onSubmit: SubmitHandler<UserUpdateParams> = async (data) => {
    if (token) {
      setIsLoading(true);
      updateUser(data, token)
        .then((response) => {
          if (response.status === 200) {
            loginAction.user(response.data.data);
            setIsLoading(false);
          }
        })
        .catch((err) => {
          setIsLoading(false);
          setError(true);
        });
    }
  };

  return [isLoading, onSubmit, error] as const;
};
