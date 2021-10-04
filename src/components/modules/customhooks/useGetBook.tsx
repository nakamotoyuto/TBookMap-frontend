import React from 'react'
import useSWR from 'swr'
import { API_URL } from '../../../util/constants'
import { fetchGetNoAuth } from '../../../util/fetch'
export const useGetBook = (path: string) => {
  const url = `${API_URL}${path}`
  const { data, error } = useSWR(url, fetchGetNoAuth, { revalidateOnFocus: false })
  if (error) {
    alert('本の取得に失敗しました。')
    location.reload()
  }
  return {
    book: data ? data.data : data,
    isLoading: !error && !data,
    isError: error
  }
}