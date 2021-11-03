export type FormParamsData = LoginParams | BookRequestParams

export type LoginParams = {
  email: string,
  password: string,
}

export type BookRequestParams = {
  title: string,
  detail_url: string
}

export type FormParamsDataKey = keyof FormParamsData