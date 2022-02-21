import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { fetchGetAuth } from '../../util/fetch';
import { User } from '../../types/user';
import { API_URL } from '../../util/constants';

export const useMypage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<User>();
  const [error, setError] = useState(false);

  const getProfile = async (token: string) => {
    const res = await fetchGetAuth(`user`, token);
    return res;
  };

  useEffect(() => {
    setIsLoading(true);
    const token = Cookies.get('sansakuToken');
    if (token) {
      getProfile(token)
        .then(function (response) {
          if (response.status === 200) {
            setUserData(response.data);
            setIsLoading(false);
            setError(false);
            return;
          }
        })
        .catch(function (err) {
          setIsLoading(false);
          setError(true);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, userData] as const;
};
