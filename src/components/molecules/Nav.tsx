import React, { useReducer } from 'react';
import Image from 'next/image';
import search from '../../../public/img/svg/search.svg';
import { BiSearchAlt, BiUser, BiBook } from 'react-icons/bi';
import { useAuth } from '../hooks/useAuth';
import { LoginMenu } from './Login/LoginMenu';
import { SignUpMenu } from './SignUp/SignUpMenu';
import { useRouter } from 'next/router';

export default function Nav() {
  const [, loginState] = useAuth();
  const router = useRouter();
  const [menu, toggleMenu] = useReducer((menu) => !menu, false);
  return (
    <>
      <div className='flex items-center gap-y-0 gap-x-3 relative'>
        <Image src={search} alt='検索ボタン' />
        <div>
          <button
            onClick={toggleMenu}
            className='border rounded-md border-l-gray-200 cursor-pointer'
          >
            <div className='p-3 space-y-1'>
              <div className='w-4 h-px bg-gray-600'></div>
              <div className='w-4 h-px bg-gray-600'></div>
              <div className='w-4 h-px bg-gray-600'></div>
            </div>
          </button>
          {menu && (
            <div className='absolute flex flex-col top-12 right-0 w-36 border rounded-md border-l-gray-200 bg-white'>
              <button
                className='flex items-center p-3 cursor-pointer hover:opacity-80 hover:bg-gray-200'
                type='button'
                onClick={() => {}}
              >
                <BiSearchAlt />
                <span>検索</span>
              </button>
              {loginState.isLogin ? (
                <button
                  className='flex items-center p-3 cursor-pointer hover:opacity-80 hover:bg-gray-200'
                  type='button'
                  onClick={() => router.push('/mypage')}
                >
                  <BiUser />
                  <span>マイページ</span>
                </button>
              ) : (
                <>
                  <LoginMenu />
                  <SignUpMenu />
                </>
              )}
              <button
                className='flex items-center p-3 cursor-pointer hover:opacity-80 hover:bg-gray-200'
                type='button'
                onClick={() => {}}
              >
                <BiBook />
                <span>本リクエスト</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
