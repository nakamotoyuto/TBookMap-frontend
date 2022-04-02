import React from 'react'
import type { Book } from '../../../types/book'
import { Category } from '../../molecules/Category'
import { BookAll } from './components/BookAll'

export const Top = ({ books }: { books: Book[] }) => {
  return (
    <div className='flex flex-col items-center max-w-900 w-full m-0-auto p-8'>
        <BookAll books={books}/>
        <Category />
      </div>
  )
}
