import { fetchPostNoAuth, fetchPostNoBody } from "../../../util/fetch";

type loginFormInput = {
  email: string,
  password: string,
}

export const loginAuth = async (formData: loginFormInput) => {
  const data = {
    url: 'login',
    data: formData
  }
  const res = await fetchPostNoAuth(data)
  return res
}

export const auth = async (token: string) => {
  const data = {
    url: 'auth',
    token: token
  }
  const res = await fetchPostNoBody(data)
  return res
}