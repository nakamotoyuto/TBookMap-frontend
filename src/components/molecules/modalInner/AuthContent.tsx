import React from 'react'
import { Login } from '../Login/Login'
type Props = {
  modalClose: VoidFunction
}
export const AuthContent = (props: Props) => {
  return (
    <div>
      <Login modalClose={props.modalClose} />
    </div>
  )
}
