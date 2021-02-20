import Link from 'next/link';

interface Props {
  name: string;
  altName?: string;
  url: string;
}

/*
  Function for a basic navigation bar element
  Uses AnchorLinks for on-site pages
*/
function NavElement(props: Props) {
  return (
    <Link href={props.url}>
      <button className="focus:outline-none relative text-whitesmoke list-button font-navigation text-center text-xl lg:text-2xl tracking-wide">
        <div>
          {props.altName ? (
            <>
              <span className="hidden md:inline-block">{props.name}</span>
              <span className="md:hidden">{props.altName}</span>
            </>
          ) : (
            <span className="inline-block">{props.name}</span>
          )}
        </div>
      </button>
    </Link>
  );
}

// All parts except the Image and configuration drop downs use the NavElement function
export default function Nav() {
  return (
    <nav className="flex fixed w-full bottom-0 md:top-0 bg-lightbg z-10 shadow-drop h-14 md:h-16 lg:h-20 xl:px-40">
      <ul className="grid grid-cols-4 md:grid-cols-5 flex-grow items-center justify-items-center lg:mx-20 list-none justify-between">
        <NavElement name="About Me" altName="About" url="#about" />
        <NavElement name="My Work" altName="Work" url="#work" />
        <li id="navHome" className="hidden md:inline-block">
          <Link href="/">
            <img src="/favicon.svg" width="30%" className="mx-auto cursor-pointer" alt="" />
          </Link>
        </li>
        <NavElement name="Resources" altName="Files" url="https://files.kingbri.me" />
        <NavElement name="Blog" url="/blog" />
      </ul>
    </nav>
  );
}
