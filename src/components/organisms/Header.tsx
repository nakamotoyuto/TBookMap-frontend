import Image from 'next/image'
import { Box, Heading, Icon, IconButton, Menu, MenuButton, MenuItem, MenuList, Spinner, useDisclosure } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { BookRequestButton } from '../molecules/BookRequestButton'
import { LoginButton } from '../molecules/Login/LoginButton'
import search from '../../../public/img/svg/search.svg'
import myicon from '../../../public/img/svg/myicon.svg'
import { css } from '@emotion/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { BiSearchAlt, BiLogIn, BiUser, BiBook } from 'react-icons/bi';
import { AuthContent } from '../molecules/modalInner/AuthContent'
import { ModalBox } from '../modules/Modal'
import { LoginActions, userSelectors } from '../../store/user/user'
import Cookies from 'js-cookie'
import { auth } from '../molecules/Login/auth'

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const loginState = userSelectors.useIsLogin()
  const loginAction = LoginActions.useLoginUser()

  useEffect(() => {
    if (loginState.isLogin) return
    const token = Cookies.get('sansakuToken')
    if (token) {
      auth(token)
        .then(function (response) {
          if (response.status === 200) {
            loginAction.isLogin(true)
            loginAction.user(response.data.data)
            return
          }
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  }, [])
  return (
    <Box p={`20px`} w={`100%`} d="flex" justifyContent="space-between" alignItems="center" borderBottom={`1px`} borderColor={`#B2B2B2`}>
      <Heading as="h1">
        sansaku
      </Heading>
      <Box d={{ base: "none", md: "flex" }} alignItems={"center"} css={css`gap:0 10px;`}>
        <Image src={search} alt="検索ボタン"/>
        {
          loginState.isLogin ?
            <Image src={myicon} alt="マイページボタン" />
            :
            <LoginButton />
        }
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
            {
              loginState.isLogin ?
                <MenuItem icon={<Icon as={BiUser} />}>
                  マイページ
                </MenuItem>
              :
              <MenuItem  onClick={onOpen} icon={<Icon as={BiLogIn} />}>ログイン</MenuItem> 
            }
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
