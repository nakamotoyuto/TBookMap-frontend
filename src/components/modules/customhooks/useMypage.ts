import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { fetchGetAuth } from '../../../util/fetch'

export const useMypage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [userData, setUserData] = useState([])

  const getProfile = async (token: string) => {
    const res = await fetchGetAuth('user', token)
    return res
  }

  useEffect(() => {
    setIsLoading(true)
    const token = Cookies.get('sansakuToken')
    if (token) {
      getProfile(token)
        .then(function (response) {
          if (response.status === 200) {
            setUserData(response.data.data)
            setIsLoading(false)
            return
          }
        })
        .catch(function (err) {
          setIsLoading(false)
          console.log(err)
        })
    } else {
      setIsLoading(false)
    }
  }, [])

  return [isLoading, userData] as const
}
