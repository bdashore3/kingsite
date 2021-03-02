import Nav from '@/components/index/nav';
import Home from '@/components/index/home';
import About from '@/components/index/about';
import Work from '@/components/index/work';
import Socials from '@/components/index/socials';
import { Separator } from '@/components/utils/misc';

import Head from 'next/head';

export default function IndexPage() {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg" href="/favicon.svg" />
        <meta property="og:title" content="Brian Dashore's website" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kingbri.me" />
        <meta
          property="og:description"
          content="My name's Brian. This is my website. I make a lot of cool things. Come take a look!"
        />
        <meta
          name="Description"
          content="My name's Brian. This is my website. I make a lot of cool things. Come take a look!"
        />
        <meta property="og:image" content="/favicon.svg" />
        <meta name="theme-color" content="#ffd700" />
        <title>Brian Dashore</title>
      </Head>
      <Nav />
      <Home />
      <Separator id="about" />
      <About />
      <Separator id="work" />
      <Work />
      <Socials />
    </>
  );
}
