import React, { useState } from 'react';
import Image from 'next/image';
import search from '../../../public/img/svg/search.svg';
import { BiSearchAlt, BiUser, BiBook } from 'react-icons/bi';
import { useAuth } from '../hooks/useAuth';
import { LoginMenu } from './Login/LoginMenu';
import { SignUpMenu } from './SignUp/SignUpMenu';
import { useRouter } from 'next/router';

export default function Nav() {
  const [,loginState] = useAuth();
  const router = useRouter();
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className='flex items-center gap-x-0 gap-y-3'>
        <Image src={search} alt="検索ボタン"/>
        <div>
          <button onClick={()=> setMenu(true)} className=" border rounded-md border-l-gray-200 cursor-pointer">
            <div className='p-3 space-y-1'>
              <div className="w-4 h-px bg-gray-600"></div>
              <div className="w-4 h-px bg-gray-600"></div>
              <div className="w-4 h-px bg-gray-600"></div>
            </div>
          </button>
          {
            menu && (
              <>
                <button type="button" onClick={() => {}}>
                  <BiSearchAlt />
                  <span>検索</span>
                </button>
                {
                  loginState.isLogin ?
                    <button type="button" onClick={() => router.push('/mypage')}>
                      <BiUser />
                      <span>マイページ</span>
                    </button>
                    :
                    <>
                      <LoginMenu />
                      <SignUpMenu />
                    </>
                }
                <button type="button" onClick={() => {}}>
                  <BiBook />
                  <span>本リクエスト</span>
                </button>
              </>
            )
          }
        </div>
      </div>
    </>
  );
}
