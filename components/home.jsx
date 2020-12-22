import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Home() {
    return(
        <div
        	id="home"
          className="flex flex-col min-h-screen items-center justify-center tracking-wide"
        >
        <div className="text-center">
          <p className="text-whitesmoke text-6xl font-bold tracking-wide">
            <b>Brian Dashore</b>
          </p>
          <p className="mt-8 text-whitesmoke text-2xl">
            Future doctor. Hobbyist developer. Content Creator. Reinventing the
            wheel.
          </p>
        </div>
        <div
          className="flex w-full justify-center absolute bottom-0 p-12 text-center"
        >
          <AnchorLink
            href="#about"
            className="button-container rounded-full w-12 h-12 border-solid border-2 border-whitesmoke"
          >
            <div className="arrow down m-auto w-2 h-2 relative mt-4"></div>
          </AnchorLink>
        </div>
      </div>
    )
}
