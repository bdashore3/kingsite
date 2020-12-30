import AnchorLink from 'react-anchor-link-smooth-scroll';

interface Props {
  name: string;
  altName: string;
  url: string;
}

/*
  Function for a basic navigation bar element
  Uses AnchorLinks for on-site pages
*/
function NavElement(props: Props) {
  let link;
  if (props.url.startsWith('#')) {
    link = (
      <AnchorLink href={props.url}>
        <button className="relative text-whitesmoke list-button font-navigation text-center text-xl lg:text-2xl tracking-wide">
          <span className="hidden md:inline-block">{props.name}</span>
          <span className="md:hidden">{props.altName}</span>
        </button>
      </AnchorLink>
    );
  } else {
    link = (
      <a href={props.url} className="relative">
        <button className="relative text-whitesmoke list-button font-navigation text-center text-xl lg:text-2xl tracking-wide">
          <span className="hidden md:inline-block">{props.name}</span>
          <span className="md:hidden">{props.altName}</span>
        </button>
      </a>
    );
  }

  return <li>{link}</li>;
}

// All parts except the Image and configuration drop downs use the NavElement function
export default function Nav() {
  return (
    <nav className="flex fixed w-full bottom-0 md:top-0 bg-lightbg z-10 shadow-drop h-14 md:h-16 lg:h-20 xl:px-40">
      <ul className="grid grid-cols-4 md:grid-cols-5 flex-grow items-center justify-items-center lg:mx-20 list-none justify-between">
        <NavElement name="About Me" altName="About" url="#about" />
        <NavElement name="My Work" altName="Work" url="#work" />
        <li id="navHome" className="hidden md:inline-block">
          <AnchorLink href="#home">
            <img src="/favicon.svg" width="30%" className="mx-auto" alt="" />
          </AnchorLink>
        </li>
        <NavElement name="Resources" altName="Files" url="https://files.kingbri.me" />
        <li>
          <button className="list-button text-center relative tracking-wide text-whitesmoke font-navigation text-xl lg:text-2xl">
            <span className="hidden md:inline-block">Configuration</span>
            <span className="md:hidden">More</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
