import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { forwardRef } from 'react';

interface Props {
  name: string;
  altName?: string;
  url: string;
}

type PropsWithOptionalHref = Omit<Props, 'href'> & {
  href?: string;
};

function NavButton({ name, altName, url }: Props) {
  return (
    <button className="focus:outline-none relative text-whitesmoke list-button font-navigation text-center text-xl lg:text-2xl tracking-wide">
      <div>
        {altName ? (
          <>
            <span className="hidden md:inline-block">{name}</span>
            <span className="md:hidden">{altName}</span>
          </>
        ) : (
          <span className="inline-block">{name}</span>
        )}
      </div>
    </button>
  );
}

/*
  Function for a basic navigation bar element
  Uses AnchorLinks for on-site pages
*/
function NavElement({ name, altName, url }: Props) {
  return (
    <li>
      {url.startsWith('#') ? (
        <AnchorLink href={url}>
          <NavButton name={name} altName={altName} url={url} />
        </AnchorLink>
      ) : (
        <Link href={url}>
          <a>
            <NavButton name={name} altName={altName} url={url} />
          </a>
        </Link>
      )}
    </li>
  );
}

// All parts except the Image and configuration drop downs use the NavElement function
export default function Nav() {
  return (
    <nav className="flex fixed w-full bottom-0 md:top-0 bg-lightbg pt-4 md:pt-0 pb-safe md:pb-4 lg:pb-0 z-10 shadow-drop h-14 md:h-16 lg:h-20 xl:px-40">
      <ul className="grid grid-cols-4 md:grid-cols-5 flex-grow items-center justify-items-center lg:mx-20 list-none justify-between">
        <NavElement name="About Me" altName="About" url="#about" />
        <NavElement name="My Work" altName="Work" url="#work" />
        <li id="navHome" className="hidden md:inline-block">
          <Link href="/">
            <img
              src="/favicon.svg"
              width="65px"
              height="65px"
              className="mx-auto cursor-pointer"
              alt=""
            />
          </Link>
        </li>
        <NavElement name="Resources" altName="Files" url="https://files.kingbri.dev" />
        <NavElement name="Blog" url="/blog" />
      </ul>
    </nav>
  );
}
