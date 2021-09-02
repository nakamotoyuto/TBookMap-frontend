import axios from "axios"
import { API_URL } from "./constants"
axios.defaults.withCredentials = true

type fetchData = { url: string, token: string, data: any }
type fetchNoAuthData = { url: string, data: any }

export const fetchPost = async (data: fetchData) => {
  const result = await axios(data.url, {
    method: 'POST',
    headers:  {
      'Authorization':`Bearer ${data.token}`,
    },
    params: data.data
  })
  return result
}

export const fetchPostNoAuth = async (data: fetchNoAuthData) => {
  const url = `${API_URL}${data.url}`
  const result = await axios(url, {
    method: 'POST',
    headers:  {
      'Content-Type': 'application/json'
    },
    data: data.data
  })
  return result
}


export const fetchPostNoBody = async (data: {token: string, url: string}) => {
  const url = `${API_URL}${data.url}`
  const result = await axios(url, {
    method: 'POST',
    headers:  {
      'Authorization':`Bearer ${data.token}`
    }
  })
  return result
}

export const patchItem = async(data: fetchData) =>{
  // console.log(data.url)
  // console.log(data.data)
  const result = await axios(data.url, {
    method: 'PATCH',
    headers:  {
      'Authorization':`Bearer ${data.token}`,
    },
    params: data.data
  })

  return result
}

export const deleteItem = async(data: fetchData) =>{
  // console.log(props)
  const result = await axios(data.url, {
    method: 'PATCH',
    headers:  {
      'Authorization':`Bearer ${data.token}`,
    },
    params: data.data
  })
  return result
}

// post用 認証なし
// export const fetchPostNoAuth = async (url: string, params) => {
//   const res = await fetch(url, {
//     method: 'POST',
//     body: JSON.stringify(params),
//     headers: {
//       'Content-Type': 'application/json'
//     },
//   })
//   return res.json()
// }

// // 認証付きAPI bodyなし
// export const noBodyFetch = async (url: string, token: string, method: 'GET'|'PATCH'|'POST') => {
//   const res = await fetch(url, {
//     method: method,
//     mode: 'cors',
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   })
//   return res.json()
// }

// // 認証付きAPI bodyあり
// export const bodyFetch = async (url: string, token: string, method: 'POST' | 'PATCH', body: string) => {
//   const res = await fetch(url, {
//     method: method,
//     mode: 'cors',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${token}`
//     },
//     body: body
//   })
//   return res.json()
// }