import React from 'react'
import { Btn } from '../atoms/Button'

export const BookRequestButton = () => {
  const openRequestModal = () => {
    console.log('test')
  }
  return (
    <div>
      <Btn title="本リクエスト" clickEvent={openRequestModal} />
    </div>
  )
}
