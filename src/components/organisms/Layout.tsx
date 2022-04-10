import { Header } from './Header';
import { Footer } from './Footer';
import React, { ReactNode } from 'react';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
