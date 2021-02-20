import Head from 'next/head';
import { useRouter } from 'next/router';

export default function FourOhFour() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>404</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Open+Sans&family=Raleway&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex flex-col min-h-screen justify-center">
        <div className="inline-flex flex-grow lg:flex-grow-0 flex-col text-center justify-center">
          <h1 className="font-header text-yellow-300 text-7xl mb-12">404.</h1>
          <h2 className="font-navigation font-bold text-3xl lg:text-5xl mb-12">
            Looks like that page couldn&apos;t be found.
          </h2>
        </div>
        <div className="self-center mb-8 lg:mb-0">
          <button
            className="mt-auto border-solid border-2 border-whitesmoke rounded-xl p-3 font-bold font-navigation text-3xl hover:text-black hover:bg-whitesmoke duration-200"
            onClick={() => router.back()}>
            Take me back!
          </button>
        </div>
      </div>
    </>
  );
}
