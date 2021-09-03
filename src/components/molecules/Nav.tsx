import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Box, Button, Heading, Icon, IconButton, Menu, MenuButton, MenuItem, MenuList, Spinner, useDisclosure } from '@chakra-ui/react'
import { BookRequestButton } from '../molecules/BookRequestButton'
import { LoginButton } from '../molecules/Login/LoginButton'
import search from '../../../public/img/svg/search.svg'
import myicon from '../../../public/img/svg/myicon.svg'
import { css } from '@emotion/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { BiSearchAlt, BiLogIn, BiUser, BiBook } from 'react-icons/bi';
import { AuthContent } from '../molecules/modalInner/AuthContent'
import { ModalBox } from '../modules/Modal'
import { auth } from './Login/auth'
import { LoginActions, userSelectors } from '../../store/user/user'
import Cookies from 'js-cookie'

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const loginState = userSelectors.useIsLogin()
  const loginAction = LoginActions.useLoginUser()
  useEffect(() => {
    setIsLoading(true)
    if (loginState.isLogin) {
      setIsLoading(false)
      return
    }
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
    setIsLoading(false)
  }, [])
  return (
    <>
      <Box d={{ base: "none", md: "flex" }} alignItems={"center"} css={css`gap:0 10px;`}>
        <Image src={search} alt="検索ボタン"/>
        {
          !isLoading ?
            loginState.isLogin ?
              <>
                <Image src={myicon} alt="マイページボタン" />
                <BookRequestButton />
              </>
              :
              <LoginButton />
            :
            <Button isLoading maxWidth='120px' w='100%' backgroundColor={`#EB7F31`} />
        }
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
    </>
  )
}
