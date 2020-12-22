import AnchorLink from 'react-anchor-link-smooth-scroll'

/*
  Function for a basic navigation bar element
  Uses AnchorLinks for on-site pages
*/
function NavElement(props) {
  let link;
  if (props.url.substring(0, 1) === "#") {
    link = 
      <AnchorLink 
        href={props.url} 
        className="list-button text-center relative tracking-wide"
      >
        {props.name}
      </AnchorLink>
  } else {
    link = 
      <a 
        href={props.url}
        className="list-button text-center relative tracking-wide"
      >
        {props.name}
      </a>
  }

  return (
    <li>
      {link}
    </li>
  )
}

// All parts except the Image and configuration drop downs use the NavElement function
export default function Nav() {
  return (
    <nav className="fixed w-full top-0 bg-lightbg z-10 shadow-drop px-40">
      <ul
        className="grid grid-cols-5 mx-20 justify-items-center items-center text-whitesmoke list-none justify-between font-navigation text-2xl"
      >
        <NavElement name="About Me" url="#about" />
        <NavElement name="My Work" url="#work" />
        <li>
          <AnchorLink href="#home">
            <img
              src="/favicon.svg"
              type="image/svg"
              href="#home"
              width="75px"
              height="75px"
            />
          </AnchorLink>
        </li>
        <NavElement name="Resources" url="https://files.kingbri.me" />
        <li>
          <button className="list-button text-center relative tracking-wide">
            Configuration
          </button>
        </li>
      </ul>
    </nav>
  )
}
