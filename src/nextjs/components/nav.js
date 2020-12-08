export default function Nav() {
  return (
    <nav className="fixed w-full top-0 bg-lightbg z-10 shadow-drop px-40">
      <ul
        className="grid grid-cols-5 mx-20 justify-items-center items-center text-whitesmoke list-none justify-between font-navigation text-2xl"
      >
        <li className="grid-item">
          <a
            href="#about"
            className="list-button text-center relative tracking-wide"
          >
            About Me
          </a>
        </li>
        <li className="grid-item ml-2">
          <a
            href="#work"
            className="list-button text-center relative tracking-wide"
          >
            My Work
          </a>
        </li>
        <li className="grid-item">
          <a href="#home">
            <img
              src="images/favicon.svg"
              type="image/svg"
              href="#home"
              width="75px"
              height="75px"
            />
          </a>
        </li>
        <li className="grid-item mr-8 font-bold">
          <button className="list-button text-center relative tracking-wide">
            Resources
          </button>
        </li>
        <li className="grid-item">
          <button className="list-button text-center relative tracking-wide">
            Configuration
          </button>
        </li>
      </ul>
    </nav>
  )
}