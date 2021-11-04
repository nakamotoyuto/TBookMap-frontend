import { useEffect, useState } from "react"
import Cookies from 'js-cookie'
import { LoginActions, userSelectors } from "../../../store/user/user"
import { fetchPostNoBody } from "../../../util/fetch"
import { User } from "../../../types/user"

type AuthReturnType = {
  status: number
  data: User
}

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const loginState = userSelectors.useIsLogin()
  const loginAction = LoginActions.useLoginUser()

  const auth = async (token: string) => {
    const data = {
      url: 'auth',
      token: token
    }
    const res = await fetchPostNoBody<AuthReturnType>(data)
    return res
  }

  useEffect(() => {
    setIsLoading(true)
    if (loginState.isLogin) {
      setIsLoading(false)
      return
    }
    const token = Cookies.get('sansakuToken')
    if (token) {
      auth(token)
        .then(function (response) {
          if (response.status === 200) {
            loginAction.isLogin(true)
            loginAction.user(response.data.data)
            setIsLoading(false)
            return
          }
        })
        .catch(function (err) {
          loginAction.isLogin(false)
          setIsLoading(false)
          console.log(err)
        })
    } else {
      setIsLoading(false)
    }
    return (
      setIsLoading(false)
    )
  }, [])

  return [isLoading, loginState] as const
}