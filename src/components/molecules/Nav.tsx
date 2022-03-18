import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import { Box, Icon, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import search from '../../../public/img/svg/search.svg';

import { css } from '@emotion/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { BiSearchAlt, BiUser, BiBook } from 'react-icons/bi';
import { useAuth } from '../hooks/useAuth';
import { LoginMenu } from './Login/LoginMenu';
import { SignUpMenu } from './SignUp/SignUpMenu';

export default function Nav() {
  const [,loginState] = useAuth();

  return (
    <>
      <Box d={{ base: "none", md: "flex" }} alignItems={"center"} css={css`gap:0 10px;`}>
        <Image src={search} alt="検索ボタン"/>
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
                <Link href="/mypage">
                <MenuItem icon={<Icon as={BiUser} />}>
                  マイページ
                </MenuItem>
                </Link>
                :
                <>
                  <LoginMenu />
                  <SignUpMenu />
                </>
            }
            <MenuItem icon={<Icon as={BiBook}/>}>
              本リクエスト
            </MenuItem>
            {
              loginState.isLogin &&
                <Link href="/mypage">
                  <MenuItem icon={<Icon as={BiUser} />}>
                    マイページ
                  </MenuItem>
                </Link>
            }
          </MenuList>
        </Menu>
      </Box>
    </>
  );
}
