import React from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router';

type Props = {
  children: React.ReactNode
}

export default function Auth({children} : Props) {
  //router
  const router = useRouter();
  //Cookieのチェック（これをいろいろ認証タイプにより変更）
  const token = Cookies.get("sansakuToken");
  if (token === undefined) router.replace("/");
  return (
    <>{children}</>
  );
}
