import React from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router';
import { tokenCheck } from '../../util/tokenCheck';

type Props = {
  children: React.ReactNode
}

export default function Auth({children} : Props) {
  tokenCheck('/')
  return (
    <>{children}</>
  );
}
