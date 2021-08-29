import Image from 'next/image'
import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { BookRequestButton } from '../molecules/BookRequestButton'
import { LoginButton } from '../molecules/LoginButton'
import search from '../../../public/img/svg/search.svg'
import myicon from '../../../public/img/svg/myicon.svg'

export const Header = () => {
  return (
    <Box p={`20px`} w={`100%`} d="flex" justifyContent="space-between" alignItems="center" borderBottom={`1px`} borderColor={`#B2B2B2`}>
      <Heading as="h1">
        sansaku
      </Heading>
      <Box d={"flex"} alignItems={"center"} gap={"0 10px"}>
        <Image src={search}/>
        <Image src={myicon} />
        <LoginButton />
        <BookRequestButton />
      </Box>
    </Box>
  )
}
