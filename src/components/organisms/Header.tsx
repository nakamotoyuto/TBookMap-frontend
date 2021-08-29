import { Box, Heading } from '@chakra-ui/react'
import { css, jsx } from '@emotion/react'
import React from 'react'
import { BookRequestButton } from '../molecules/BookRequestButton'
import { LoginButton } from '../molecules/LoginButton'

export const Header = () => {
  return (
    <Box p={`20px`} w={`100%`} d="flex" justifyContent="space-between" alignItems="center" borderBottom={`1px`} borderColor={`#B2B2B2`}>
      <Heading as="h1">
        sansaku
      </Heading>
      <Box d={"flex"} alignItems={"center"} gap={"0 10px"}>
        <img src={`/img/svg/search.svg`} />
        <img src={`/img/svg/myicon.svg`} />
        <LoginButton />
        <BookRequestButton />
      </Box>
    </Box>
  )
}
