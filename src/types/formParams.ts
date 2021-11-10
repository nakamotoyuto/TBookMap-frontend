export type FormParamsData = LoginParams | BookRequestParams

export type LoginParams = {
  email: string,
  password: string,
}

export type BookRequestParams = {
  title: string,
  detail_url: string
}

export type UserUpdateParams = {
  user: {
    email: string,
    password: string,
    userInfo: {
      name: string,
      occupation: number,
      history: number,
    }
  }
}

export type FormParamsDataKey = keyof FormParamsData