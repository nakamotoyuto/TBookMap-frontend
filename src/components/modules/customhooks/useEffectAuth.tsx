import { useEffect, useState } from "react"
import Cookies from 'js-cookie'
import { auth } from "../../molecules/Login/auth"
import { LoginActions, userSelectors } from "../../../store/user/user"

export const useEffectAuth = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const loginState = userSelectors.useIsLogin()
  const loginAction = LoginActions.useLoginUser()

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
            return
          }
        })
        .catch(function (err) {
          console.log(err)
        })
    }
    setIsLoading(false)
  }, [])

  return [isLoading, loginState] as const
}