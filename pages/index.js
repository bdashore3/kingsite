import Nav from '../components/nav';
import Home from '../components/home';
import About from '../components/about';
import Work from '../components/work';
import Socials from '../components/socials';

import Head from 'next/head';

export default function IndexPage() {
  return (
    <div>
      <Head>
        <link rel="icon" type="image/svg" href="/favicon.svg" />
        <title>Kingbri's website</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Open+Sans&family=Raleway&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      <Home />
      <About />
      <Work />
      <Socials />
    </div>
  )
}
