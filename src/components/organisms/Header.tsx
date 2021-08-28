import { Box, Heading } from '@chakra-ui/react'
import { css, jsx } from '@emotion/react'
import React from 'react'
import { BookRequestButton } from '../molecules/BookRequestButton'
import { LoginButton } from '../molecules/LoginButton'

export const Header = () => {
  const HeaderRightBox = css`
    display:flex;
    align-items:center;
    gap: 0 10px;
  `
  return (
    <Box p={`20px`} w={`100%`} d="flex" justifyContent="space-between" alignItems="center" borderBottom={`1px`} borderColor={`#B2B2B2`}>
      <Heading as="h1">
        sansaku
      </Heading>
      <div css={HeaderRightBox}>
        <img src={`/img/svg/search.svg`} />
        <img src={`/img/svg/myicon.svg`} />
        <LoginButton />
        <BookRequestButton />
      </div>
    </Box>
  )
}
