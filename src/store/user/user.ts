import { atom, selector, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { RecoilAtomKeys, RecoilSelectorKeys } from "../Recoilkeys";
import React from "react";
import { IsLogin, User } from "../../types/user";

const initialUser = {
  id: 0,
  email: '',
  password: '',
  userInfo: {
    name: '',
    occupation: 0,
    history: 0
  },
  token: ''
};

const initialState = initialUser as User;

type UserSelectors = {
  useUser: () => User
  useIsLogin: () => IsLogin,
}

type LoginActions = {
  useLoginUser: () => (data: User) => void
}

const userState = atom<User>({
  key: RecoilAtomKeys.USER_STATE,
  default: initialState,
});

// loginstate
const isLoginstate = atom<IsLogin>({
  key: RecoilAtomKeys.ISLOGIN_STATE,
  default: {
    isLogin: false
  }
});
// ユーザー
const userSelector = selector<User>({
  key: RecoilSelectorKeys.USER_USERS,
  get: ({ get }) => get(userState)
});
// ログイン状態
const isLoginSelector = selector<IsLogin>({
  key: RecoilSelectorKeys.USER_ISLOGIN,
  get: ({ get }) => get(isLoginstate)
});
//ログインできた時のuserのステートを更新するactions
export const LoginActions = {
  useLoginUser: () => {
    const setIsLogin = useSetRecoilState(isLoginstate);
    const setUser = useSetRecoilState(userState);
    const isLogin = React.useCallback(
      (isLogin: boolean) =>
        //Login状態変更
        setIsLogin((prev) => {
          return {
            ...prev,
            isLogin: isLogin
          };
        }),
      []);
    const user = React.useCallback(
      (data: User) =>
        //user状態変更
        setUser((prev) => {
            return {
              ...prev,
              ...data
            };
        }),
      []);
    return {isLogin, user};
  }
};

export const LogoutActions = {
  useLogoutUser: () => {
    const setIsLogin = useSetRecoilState(isLoginstate);
    const setUser = useSetRecoilState(userState);
    const isLoginFalse = React.useCallback(
      () =>
        //Login状態変更
        setIsLogin((prev) => {
          return {
            ...prev,
            isLogin: false
          };
        }),
      []);
    const initUser = React.useCallback(
      () =>
        //user状態変更
        setUser(() => {
            return {
              ...initialUser
            };
        }),
      []);
    return {
      isLoginFalse,
      initUser
    };
  }
};
// ​userselector
export const userSelectors:  UserSelectors = {
  useUser: () => useRecoilValue(userSelector),
  useIsLogin: () => useRecoilValue(isLoginSelector),
};