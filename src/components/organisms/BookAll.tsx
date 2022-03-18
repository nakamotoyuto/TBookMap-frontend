import { Box, Heading, Spinner } from '@chakra-ui/react';
import React from 'react';
import { useGetBook } from '../hooks/useGetBook';
import { BookCard } from '../molecules/BookCard';

type Item = {
  id: number,
  title: string,
  detail_url: string,
  detail: string,
  publisher_name: string,
  sales_date: string,
  image_url: string,
  author: string,
  bookTag: [
    {
      id: number,
      tag: Tag
    }
  ]
}

type Tag = {
  id: number,
  name: string,
  createdAt: string,
  updatedAt: string
}

export const BookAll = () => {
  const { book, isLoading } = useGetBook('books');

  return (
    <div className='p-4 w-full rounded-lg border border-red-50 shadow'>
        <h3 className='mb-6 font-bold text-2xl'>Topic</h3>
        {
          isLoading ?
            <Spinner />
          :
          <div className='flex justify-between flex-wrap gap-x-5 gap-y-10'>
            {
              book && (
                book.data.map((item: Item) => {
                  return (
                    <BookCard {...item} key={item.title} />
                  );
                })
              )
            }
          </div>
      }
      </div>
  );
};
