import { atom } from "recoil";
import { RecoilAtomKeys } from "../Recoilkeys";

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

export const userState = atom<User>({
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

export const isLoginstate = atom<IsLogin>({
  key: RecoilAtomKeys.ISLOGIN_STATE,
  default: {
    isLogin: false
  }
})