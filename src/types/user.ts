export type User = {
  id: number,
  email: string,
  password: string,
  userInfo: {
    name: string,
    occupation: number,
    history: number,
  }
  token: string
}

export type IsLogin = {
  isLogin: boolean
}