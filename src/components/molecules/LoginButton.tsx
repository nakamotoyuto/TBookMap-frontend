import React from 'react'
import { Btn } from '../atoms/Button'
import { ModalBox, useModal } from '../modules/Modal'
import { AuthContent } from './modalInner/AuthContent'

export const LoginButton = () => {
  const { modal, modalOpen, modalClose } = useModal()
  const openLoginModal = () => {
    console.log('test')
    modalOpen()
  }
  return (
    <div>
      <Btn title="ログイン" clickEvent={openLoginModal} />
      <ModalBox modal={modal} close={modalClose} maxWidth="400px">
        <AuthContent modalClose={modalClose} />
      </ModalBox>
    </div>
  )
}
