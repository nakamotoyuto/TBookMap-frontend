import React from 'react';
import type { Book } from '../../../../types/book';
import { BookCard } from './BookCard';

export const BookAll = ({ books }: { books: Book[] }) => {
  return (
    <div className='p-4 w-full rounded-lg border border-red-50 shadow'>
      <h3 className='mb-6 font-bold text-2xl'>Topic</h3>
      <div className='flex justify-between flex-wrap gap-x-5 gap-y-10'>
        {books &&
          books.map((book: Book) => {
            return <BookCard book={book} key={book.title} />;
          })}
      </div>
    </div>
  );
};
