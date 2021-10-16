import React, { useState } from 'react'
import { LoginActions } from '../../../store/user/user'
import Cookies from 'js-cookie'
import { LoginFormInput } from '../../molecules/Login/Login'
import { UseFormReturn } from 'react-hook-form'
import { fetchPostNoAuth } from '../../../util/fetch'

export const useSignUp = (methods: UseFormReturn<LoginFormInput, object>, closeModal: VoidFunction) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const loginAction = LoginActions.useLoginUser()

  const signUpAuth = async (formData: LoginFormInput) => {
    const data = {
      url: 'signup',
      data: formData
    }
    const res = await fetchPostNoAuth(data)
    return res
  }

  const onSubmit = async (data: LoginFormInput) => {
    setIsLoading(true)
    signUpAuth(data)
      .then(function (response) {
        if (response.status === 200) {
          Cookies.set('sansakuToken', response.data.data.token)
          setIsLoading(false)
          methods.reset()
          closeModal()
          loginAction.isLogin(true)
          loginAction.user(response.data.data)
          return
        }
      })
      .catch(function (err) {
        methods.reset()
        setIsLoading(false)
        setError(true)
        console.log(err)
      })
  }

  return [isLoading, onSubmit, error] as const
}
