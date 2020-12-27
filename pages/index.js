import Nav from '../components/nav';
import Home from '../components/home';
import About from '../components/about';
import Work from '../components/work';
import Socials from '../components/socials';
import { Separator } from '../components/misc'

import Head from 'next/head';

export default function IndexPage() {
  return (
    <div>
      <Head>
        <link rel="icon" type="image/svg" href="/favicon.svg" />
        <meta property="og:title" content="Kingbri's website" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kingbri.me" />
        <meta property="og:description" content="Hey there, I'm Bri! Take a look at my site!" />
        <meta property="og:image" content="https://avatars1.githubusercontent.com/u/8082010?s=460&u=6f29bfc7183955182abe0625dc1cc8054db0f2b9&v=4" />
        <meta name="theme-color" content="ffd700" />
        <title>Kingbri's website</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Open+Sans&family=Raleway&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      <Home />
      <Separator id="about" />
      <About />
      <Separator id="work" />
      <Work />
      <Socials />
    </div>
  )
}
