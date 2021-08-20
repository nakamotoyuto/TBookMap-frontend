import React from 'react'
import { BookRequestButton } from '../molecules/BookRequestButton'
import { LoginButton } from '../molecules/LoginButton'

export const Header = () => {
  return (
    <div>
      <div>sansaku</div>
      <div>
        <div>検索</div>
        <div>icon</div>
        <LoginButton />
        <BookRequestButton />
      </div>
    </div>
  )
}
