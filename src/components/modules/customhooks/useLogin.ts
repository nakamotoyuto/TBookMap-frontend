import React, { useState } from 'react'
import { LoginActions } from '../../../store/user/user'
import Cookies from 'js-cookie'
import { LoginFormInput } from '../../molecules/Login/Login'
import { UseFormReturn } from 'react-hook-form'
import { fetchPostNoAuth } from '../../../util/fetch'

export const useLogin = (methods: UseFormReturn<LoginFormInput, object>, closeModal: VoidFunction) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const loginAction = LoginActions.useLoginUser()

  const loginAuth = async (formData: LoginFormInput) => {
    const data = {
      url: 'login',
      data: formData
    }
    const res = await fetchPostNoAuth(data)
    return res
  }

  const onSubmit = async (data: LoginFormInput) => {
    setIsLoading(true)
    loginAuth(data)
      .then(function (response) {
        if (response.status === 200) {
          loginAction.isLogin(true)
          loginAction.user(response.data.data)
          Cookies.set('sansakuToken', response.data.data.token)
          setIsLoading(false)
          closeModal()
          return
        }
      })
      .catch(function (err) {
        setIsLoading(false)
        console.log(err)
      })
    methods.reset()
  }

  return [isLoading, onSubmit] as const
}
