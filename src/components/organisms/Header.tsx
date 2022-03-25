import Link from "next/link";
import dynamic from 'next/dynamic';
import React from 'react';
const Nav = dynamic(() => import( '../molecules/Nav'),{ssr:false});
export const Header = () => {
  return (
    <div className="flex justify-between items-center border-b border-sub w-full p-5">
      <Link href="/" passHref>
        <h1 className="font-bold text-4xl cursor-pointer">Sansaku</h1>
      </Link>
      <Nav />
    </div>
  );
};
