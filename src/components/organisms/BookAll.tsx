import { Box, Heading, Spinner } from '@chakra-ui/react'
import { css } from '@emotion/react'
import React from 'react'
import { useGetBook } from '../customhooks/useGetBook'
import { BookCard } from '../molecules/BookCard'

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
  const { book, isLoading } = useGetBook('books')

  return (
    <Box p="16" w={`100%`} borderRadius={`10px`} border="1px" borderColor="#B2B2B2" boxShadow={'xl'}>
      <Heading as="h3" mb={6}>Topic</Heading>
      {isLoading ?
        <Spinner />:
        <Box d="flex" justifyContent="space-between" flexWrap="wrap" css={css`gap: 20px 40px;`}>
          {
            book && (
              book.data.map((item: Item) => {
                return (
                  <BookCard {...item} key={item.title} />
                )
              })
            )
          }
        </Box>
      }
    </Box>
  )
}
