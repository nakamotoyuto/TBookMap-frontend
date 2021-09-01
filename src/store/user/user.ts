import { atom, selector, useRecoilCallback, useRecoilValue } from "recoil";
import { RecoilAtomKeys, RecoilSelectorKeys } from "../Recoilkeys";

type User = {
  id: number| null,
  name: string| null,
  email: string | null,
  password: string | null,
  history_id: number | null,
  token: string| null
}

type IsLogin = {
  isLogin: boolean
}

type UserSelectors = {
  useUser: () => User
  useIsLogin: () => IsLogin
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
  useLoginUser: () =>
    useRecoilCallback(({ set }) => (data: User) => {
      set(userState, (prev) => {
        const loginUser: User = data
        return {
          ...prev,
          userState: loginUser
        }
      })
    }, [])
}
​
export const userSelectors:  UserSelectors = {
  useUser: () => useRecoilValue(userSelector),
  useIsLogin: () => useRecoilValue(isLoginSelector)
}