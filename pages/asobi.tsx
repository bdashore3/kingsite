import Head from 'next/head';
import Link from 'next/link';

import { SocialButton } from '@/components/index/socials';
import { Separator } from '@/components/utils/misc';
import SocialImages from '@/models/SocialImages';

export default function FileBridgeLanding() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Asobi" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kingbri.me/asobi" />
        <meta property="og:description" content="An immersive browser for iOS, iPadOS, and Macs" />
        <meta name="Description" content="An immersive browser for iOS, iPadOS, and Macs" />
        <meta
          property="og:image"
          content="https://avatars1.githubusercontent.com/u/8082010?s=460&u=6f29bfc7183955182abe0625dc1cc8054db0f2b9&v=4"
        />
        <meta name="theme-color" content="#468fcc" />
        <link rel="icon" type="image/png" href="/Asobi.png" />
        <title>Asobi | Home</title>
      </Head>
      <div className="flex-col relative justify-center flex min-h-screen items-center tracking-wide">
        <div className="hidden md:block">
          <Separator />
        </div>
        <div className="flex-col text-center">
          <div className="p-5 lg:p-0">
            <img
              src="./Asobi.png"
              alt="The Asobi app icon"
              className="m-auto rounded-2xl w-32 lg:w-auto h-32 lg:h-auto"
            />
          </div>

          <p className="text-whitesmoke font-header text-4xl lg:text-6xl lg:leading-relaxed font-bold tracking-wide">
            Asobi
          </p>
          <p className="mt-4 font-paragraph text-whitesmoke text-lg lg:text-2xl">
            An immersive browser for iOS, iPadOS, and Macs.
          </p>
        </div>
        <div className="mt-12 mb-16 inline-flex flex-col justify-center items-center">
          <a
            href="https://apps.apple.com/us/app/asobi/id1589812837"
            target="_blank"
            rel="noreferrer noopener">
            <img
              src="./DownloadAppStore.svg"
              alt="Download on the app store"
              className="h-12 lg:h-16"
            />
          </a>
          <button className="border-solid border-2 mt-8 text-lg border-white p-2 rounded-md cursor-pointer hover:bg-white hover:text-black duration-200">
              <a href="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4">
                Test audio playback
              </a>
            </button>
          <ul className="mt-4 lg:mt-6 flex items-center">
            <SocialButton
              name="github"
              url="https://github.com/bdashore3/Asobi"
              color="hover:text-orange-400"
              svgPath={SocialImages.Github}
            />
            <SocialButton
              name="discord"
              url="https://discord.gg/pswt7by"
              color="hover:text-blurple"
              svgPath={SocialImages.Discord}
            />
          </ul>
        </div>
        <footer className="text-center max-w-screen">
          © 2021 Brian Dashore |&nbsp;
          <span>
            <Link href="asobi/privacy_policy">
              <a className="text-blue-300 underline">Privacy Policy</a>
            </Link>
          </span>
        </footer>
      </div>
    </>
  );
}
