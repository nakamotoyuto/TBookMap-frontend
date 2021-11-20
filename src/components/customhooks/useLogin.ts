import React, { useState } from 'react'
import { LoginActions } from '../../store/user/user'
import Cookies from 'js-cookie'
import { SubmitHandler, UseFormReturn } from 'react-hook-form'
import { fetchPostNoAuth } from '../../util/fetch'
import { FormParamsData, LoginParams } from '../../types/formParams'

export const useLogin = (methods: UseFormReturn<LoginParams, object>, closeModal: VoidFunction) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const loginAction = LoginActions.useLoginUser()

  const loginAuth = async (formData: LoginParams) => {
    const data = {
      url: 'login',
      data: formData
    }
    const res = await fetchPostNoAuth(data)
    return res
  }

  const onSubmit:SubmitHandler<LoginParams> = async (data) => {
    setIsLoading(true)
    loginAuth(data)
      .then(function (response) {
        if (response.status === 200) {
          loginAction.isLogin(true)
          loginAction.user(response.data.data)
          Cookies.set('sansakuToken', response.data.data.token)
          setIsLoading(false)
          methods.reset()
          closeModal()
          return
        }
      })
      .catch(function (err) {
        setIsLoading(false)
        setError(true)
        methods.reset()
        console.log(err)
      })
  }

  return [isLoading, onSubmit, error] as const
}
