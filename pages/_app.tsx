import { AppProps } from 'next/app';

import '@/styles/index.css';
import '@/styles/preflight-defaults.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
