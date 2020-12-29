import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Home() {
  return (
    <div
      id="home"
      className="relative flex flex-col min-h-screen items-center tracking-wide border-solid">
      <div className="home-text text-center">
        <p className="text-whitesmoke text-4xl lg:text-6xl lg:leading-relaxed font-bold tracking-wide">
          <b>Brian Dashore</b>
        </p>
        <p className="mt-8 text-whitesmoke text-lg lg:text-2xl">
          Future physician. Hobbyist developer. Content Creator. Reinventing the wheel.
        </p>
      </div>
      <div className="flex w-full justify-center absolute bottom-0 mb-36 md:mb-8 lg:mb-16 text-center">
        <AnchorLink
          href="#about"
          className="button-container rounded-full w-12 h-12 border-solid border-2 border-whitesmoke">
          <div className="arrow down m-auto w-2 h-2 relative mt-4"></div>
        </AnchorLink>
      </div>
    </div>
  );
}
