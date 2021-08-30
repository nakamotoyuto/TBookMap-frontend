import Image from 'next/image'
import { Box, Heading, Icon, IconButton, Menu, MenuButton, MenuItem, MenuList, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { BookRequestButton } from '../molecules/BookRequestButton'
import { LoginButton } from '../molecules/LoginButton'
import search from '../../../public/img/svg/search.svg'
import myicon from '../../../public/img/svg/myicon.svg'
import { css } from '@emotion/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { BiSearchAlt, BiLogIn, BiUser, BiBook } from 'react-icons/bi';
import { AuthContent } from '../molecules/modalInner/AuthContent'
import { ModalBox } from '../modules/Modal'

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box p={`20px`} w={`100%`} d="flex" justifyContent="space-between" alignItems="center" borderBottom={`1px`} borderColor={`#B2B2B2`}>
      <Heading as="h1">
        sansaku
      </Heading>
      <Box d={{ base: "none", md: "flex" }} alignItems={"center"} css={css`gap:0 10px;`}>
        <Image src={search}/>
        <Image src={myicon} />
        <LoginButton />
        <BookRequestButton />
      </Box>
      <Box d={{ base: "block", md: "none"}}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem icon={<Icon as={BiSearchAlt} />}>
              検索
            </MenuItem>
            <MenuItem icon={<Icon as={BiUser} />}>
              マイページ
            </MenuItem>
            <MenuItem  onClick={onOpen} icon={<Icon as={BiLogIn} />}>ログイン</MenuItem> 
            <MenuItem icon={<Icon as={BiBook}/>}>
              本リクエスト
            </MenuItem>
          </MenuList>
        </Menu>
        <ModalBox modal={isOpen} maxWidth="400px" m={"0 15px"} modalClose={onClose}>
          <AuthContent modalClose={onClose} />
        </ModalBox>
      </Box>
    </Box>
  )
}
