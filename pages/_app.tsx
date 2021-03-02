import { AppProps } from 'next/app';

import '@/styles/index.css';
import '@/styles/preflight-defaults.css';
import { GoogleFonts } from 'next-google-fonts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Open+Sans&family=Raleway&display=swap" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
