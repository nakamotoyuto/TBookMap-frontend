import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
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

const userSelector = selector<User>({
  key: RecoilSelectorKeys.USER_USERS,
  get: ({ get }) => get(userState)
})

const isLoginSelector = selector<IsLogin>({
  key: RecoilSelectorKeys.USER_ISLOGIN,
  get: ({ get }) => get(isLoginstate)
})
​
export const userSelectors:  UserSelectors = {
  useUser: () => useRecoilValue(userSelector),
  useIsLogin: () => useRecoilValue(isLoginSelector)
}