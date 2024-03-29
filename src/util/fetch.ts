import axios, { AxiosResponse } from 'axios';
import { API_URL } from './constants';
axios.defaults.withCredentials = true;

type FetchData<T> = { url: string; token: string; data: T };
type FetchNoAuthData = { url: string; data: any };
type FetchNoData = { url: string; token: string };
type FetchGetNoAuth = string;

export const fetchGetNoAuth = async <T>(data: FetchGetNoAuth) => {
  const url = `${API_URL}${data}`;
  const result: AxiosResponse<T> = await axios(url, {
    method: 'GET',
  });
  return result;
};

// 認証付きAPI bodyなし
export const fetchGetAuth = async (url: string, token: string) => {
  const res = await fetch(`${API_URL}${url}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};

export const fetchPost = async <T>(data: FetchData<T>) => {
  const result = await axios(`${API_URL}${data.url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${data.token}`,
    },
    params: data.data,
  });
  return result;
};

export const fetchPostNoData = async <T>(data: FetchNoData) => {
  const result = await axios(`${API_URL}${data.url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${data.token}`,
    },
  });
  return result;
};

export const fetchPatch = async <T>(data: FetchData<T>) => {
  const result = await axios(`${API_URL}${data.url}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${data.token}`,
      'Content-Type': 'application/json',
    },
    params: data.data,
  });
  return result;
};

export const fetchPostNoAuth = async (data: FetchNoAuthData) => {
  const url = `${API_URL}${data.url}`;
  const result = await axios(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data.data,
  });
  return result;
};

export const fetchPostNoBody = async <T>(data: { token: string; url: string }) => {
  const url = `${API_URL}${data.url}`;
  const result: AxiosResponse<T> = await axios(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  });
  return result;
};

export const patchItem = async <T>(data: FetchData<T>) => {
  // console.log(data.url)
  // console.log(data.data)
  const result = await axios(data.url, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    params: data.data,
  });

  return result;
};

export const deleteItem = async <T>(data: FetchData<T>) => {
  const result = await axios(data.url, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
    params: data.data,
  });
  return result;
};

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
