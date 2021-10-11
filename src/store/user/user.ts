import { atom, selector, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { RecoilAtomKeys, RecoilSelectorKeys } from "../Recoilkeys";
import Cookies from 'js-cookie'
import { fetchPostNoAuth } from "../../util/fetch";
import React from "react";

export type User = {
  id: number,
  name: string,
  email: string,
  password: string,
  history_id: number,
  token: string
}

const initialUser = {
  id: 0,
  name: '',
  email: '',
  password: '',
  history_id: 0,
  token: ''
}

const initialState = initialUser as User

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
  default: initialState,
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
}