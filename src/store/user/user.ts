import { atom, selector, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { RecoilAtomKeys, RecoilSelectorKeys } from "../Recoilkeys";
import Cookies from 'js-cookie'
import { fetchPostNoAuth } from "../../util/fetch";
import React from "react";

type User = {
  id: number| null,
  name: string| null,
  email: string | null,
  password: string | null,
  history_id: number | null,
  token: string| null
}

type UserLogin = {
  password: string| null,
  email: string | null,
}

type IsLogin = {
  isLogin: boolean
}

type UserSelectors = {
  useUser: () => User
  useIsLogin: () => IsLogin,
}

type LoginActions = {
  useLoginUser: () => (data: User) => void
}

const userState = atom<User>({
  key: RecoilAtomKeys.USER_STATE,
  default: {
    id: null,
    name: null,
    email: null,
    password: null,
    history_id: null,
    token: null
  },
})

const userLoginValueState = atom<UserLogin>({
  key: RecoilAtomKeys.USER_LOGIN_VALUE,
  default: {
    email: null,
    password: null
  }
})
// loginstate
const isLoginstate = atom<IsLogin>({
  key: RecoilAtomKeys.ISLOGIN_STATE,
  default: {
    isLogin: false
  }
})
// ユーザー
const userSelector = selector<User>({
  key: RecoilSelectorKeys.USER_USERS,
  get: ({ get }) => get(userState)
})
// ログイン状態
const isLoginSelector = selector<IsLogin>({
  key: RecoilSelectorKeys.USER_ISLOGIN,
  get: ({ get }) => get(isLoginstate)
})
//ログインできた時のuserのステートを更新するactions
export const LoginActions = {
  useLoginUser: () => {
    const setIsLogin = useSetRecoilState(isLoginstate)
    const setUser = useSetRecoilState(userState)
    const isLogin = React.useCallback(
      (isLogin: boolean) =>
        //Login状態変更
        setIsLogin((prev) => {
          return {
            ...prev,
            isLogin: isLogin
          }
        }),
      [])
    const user = React.useCallback(
      (data: User) =>
        //user状態変更
        setUser((prev) => {
            return {
              ...prev,
              userState: data
            }
        }),
      [])
    return {isLogin, user}
  }
}
// ​userselector
export const userSelectors:  UserSelectors = {
  useUser: () => useRecoilValue(userSelector),
  useIsLogin: () => useRecoilValue(isLoginSelector),
  // useLogin: () => useRecoilValue(loginSelector)
}