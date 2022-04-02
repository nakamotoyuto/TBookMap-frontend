import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { LogoutActions } from '../../store/user/user';
import { fetchPostNoData } from '../../util/fetch';

export const useLogout = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const logoutAction = LogoutActions.useLogoutUser();
  const logoutFetch = async (token: string) => {
    const data = {
      url: 'logout',
      token: token,
    };
    const res = await fetchPostNoData(data);
    return res;
  };

  const logout = async () => {
    setIsLoading(true);
    const token = Cookies.get('sansakuToken');
    if (token) {
      logoutFetch(token)
        .then((response) => {
          if (response.status === 200) {
            logoutAction.isLoginFalse();
            logoutAction.initUser();
            return;
          }
        })
        .catch(() => {
          alert('エラーが起きました。再度やり直してください');
        });
    } else {
      setIsLoading(false);
    }
  };

  return [isLoading, logout];
};
