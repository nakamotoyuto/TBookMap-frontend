import dynamic from 'next/dynamic'
import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
const Nav = dynamic(() => import( '../molecules/Nav'),{ssr:false})
export const Header = () => {
  return (
    <Box p={`20px`} w={`100%`} d="flex" justifyContent="space-between" alignItems="center" borderBottom={`1px`} borderColor={`#B2B2B2`}>
      <Heading as="h1">
        sansaku
      </Heading>
      <Nav />
    </Box>
  )
}
