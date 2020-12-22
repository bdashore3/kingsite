import Nav from '../components/nav.jsx';
import Home from '../components/home.jsx';
import About from '../components/about.jsx';
import Work from '../components/work.jsx';
import Socials from '../components/socials.jsx';

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
