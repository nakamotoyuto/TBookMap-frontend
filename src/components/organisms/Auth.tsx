import React from 'react'
import Cookies from 'js-cookie'
import router, { useRouter } from 'next/router';
import { tokenCheck } from '../../util/tokenCheck';
import { useAuth } from '../customhooks/useAuth';

type Props = {
  children: React.ReactNode
}

export default function Auth({children} : Props) {
  const [isLoading, , isError] = useAuth()
  if (isLoading) {
    return <div></div>
  }
  if (isError) {
    router.push('/')
  }
  return (
    <>{children}</>
  );
}
