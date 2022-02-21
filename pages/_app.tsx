import '../src/styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from '../src/components/organisms/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </RecoilRoot>
  );
}
export default MyApp;
