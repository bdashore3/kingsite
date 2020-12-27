import Masonry from 'react-masonry-component';

// Options for the masonry layout
let masonryOptions = {
  gutter: ".gutter-sizer",
  transitionDuration: 200,
  horizontalOrder: true,
  fitWidth: true
};

// Basic function to create a work card
function WorkCard(props) {
  let buttonText = "View source"

  if (props.url.startsWith("https://github.com")) {
    buttonText = "View source code"
  }

  return(
    <div className="grid-item p-5 max-w-75v min-h-30v md:max-w-40v md:min-h-25v lg:max-w-25v lg:min-h-35v lg:max-h-45v">
      <h1 className="relative underline text-2xl lg:text-3xl">{props.name}</h1>
      <p className="relative inline-flex flex-grow align-center text-md mt-4 mb-4 lg:text-xl font-paragraph">{props.description}</p>
      <div className="inline-flex bottom-4">
        <a href={props.url} target="_blank" rel="noopener">
          <button
            className="text-md lg:text-lg rounded-md px-3 py-1 lg:py-2 duration-500 text-whitesmoke border hover:text-black hover:bg-whitesmoke"
          >
            {buttonText}
          </button>
        </a>
      </div>
    </div>
  )
}

export default function Work() {
  return(
    <div className="flex flex-col min-h-screen">
    <div className="inline-flex flex-col flex-grow overflow-visible">
      <h1
        className="text-yellow-300 text-center text-4xl md:text-5xl lg:text-6xl leading-normal lg:leading-relaxed font-header font-semibold tracking-wide p-3"
      >
        My Work
      </h1>
      <Masonry options={masonryOptions} className="max-w-full lg:-my-10 mx-auto lg:p-12">
        <div className="gutter-sizer"></div>
        <WorkCard
          name="RoyalGuard"
          description="Makes your discord administration experience simple and easy."
          url="https://github.com/bdashore3/RoyalGuard"
        />
        <WorkCard
          name="CourtJester"
          description="A multipurpose bot which enhances your discord server experience."
          url="https://github.com/bdashore3/CourtJester"
        />
        <WorkCard
          name="Simple Retweets"
          description="A bot that retweets mentioned posts on a configured account."
          url="https://github.com/bdashore3/RoyalGuard"
        />
        <WorkCard
          name="KingBot-Twitch"
          description="My personal bot for Twitch. Is currently being rewritten in Rust."
          url="https://github.com/bdashore3/KingBot"
        />
        <WorkCard
          name="KingKernel"
          description="A custom kernel for the Google Pixel lineup with simplicity as the main feature."
          url="https://github.com/King-Kernel"
        />
        <WorkCard
          name="RegalPack"
          description="A minecraft modpack that allows you to choose your own story."
          url="https://www.curseforge.com/minecraft/modpacks/regalpack"
        />
      </Masonry>
    </div>
    </div>
  )
}
