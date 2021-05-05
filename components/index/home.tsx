import Link from 'next/link';

export default function Home() {
  return (
    <div
      id="home"
      className="relative flex min-h-screen items-center justify-center tracking-wide border-solid">
      <div className="mb-32 lg:mb-0 text-center">
        <p className="text-whitesmoke text-4xl lg:text-6xl lg:leading-relaxed font-bold tracking-wide">
          <b>Brian Dashore</b>
        </p>
        <p className="mt-8 text-whitesmoke text-lg lg:text-2xl">
          Future physician. Hobbyist developer. Content Creator. Reinventing the wheel.
        </p>
      </div>
      <div className="flex w-full justify-center absolute bottom-0 mb-36 md:mb-8 lg:mb-16 text-center">
        <Link href="#about">
          <div className="button-container rounded-full w-12 h-12 border-solid border-2 cursor-pointer border-whitesmoke">
            <div className="arrow down m-auto w-2 h-2 relative mt-4"></div>
          </div>
        </Link>
      </div>
    </div>
  );
}
