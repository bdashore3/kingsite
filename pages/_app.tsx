import { AppProps } from 'next/app';

import Nav from '@/components/global/nav';
import '@/styles/index.css';
import '@/styles/preflight-defaults.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
