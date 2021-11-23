import React, { useState } from 'react'
import { LoginActions } from '../../store/user/user'
import Cookies from 'js-cookie'
import { UseFormReturn } from 'react-hook-form'
import { fetchPostNoAuth } from '../../util/fetch'
import { LoginParams } from '../../types/formParams'

export const useSignUp = (methods: UseFormReturn<LoginParams, object>, closeModal: VoidFunction) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const loginAction = LoginActions.useLoginUser()

  const signUpAuth = async (formData: LoginParams) => {
    const data = {
      url: 'signup',
      data: formData
    }
    const res = await fetchPostNoAuth(data)
    return res
  }

  const onSubmit = async (data: LoginParams) => {
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
