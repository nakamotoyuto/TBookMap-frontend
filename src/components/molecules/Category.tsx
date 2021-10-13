import React from 'react'

import { Box, Heading } from '@chakra-ui/layout'
import { css } from '@emotion/react'

import { BookTag } from '../../enum/bookTag'
import { Link } from '@chakra-ui/react'

export const Category = () => {
  return (
    <Box mt="16" mb="32" w={`100%`} borderRadius={`10px`}>
      <Heading width="100%" as="h3" mb={6} textAlign="left">Category</Heading>
      <Box d="flex" flexWrap="wrap" justifyContent="space-between" css={css`gap: 10px 20px;`}>
        {
          BookTag.map((item) => {
            return <CategoryItem key={item.name} name={item.name}/>
          })
        }
      </Box>
    </Box>
  )
}

type Props = {
  name: string,
}

const CategoryItem = (props: Props) => {
  const { name } = props
  return (
    <Link width="100%" maxWidth="150px">
      <Box p="1.5" borderRadius="lg" border="1px" borderColor="gray.200" textAlign="right">
        {name}
      </Box>
    </Link>
  )
}
