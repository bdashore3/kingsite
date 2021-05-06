import Link from 'next/link';

interface Props {
  name: string;
  description: string;
  url: string;
}

// Basic function to create a work card
function WorkCard(props: Props) {
  let buttonText = 'View source';

  if (props.url.startsWith('https://github.com')) {
    buttonText = 'View source code';
  }

  return (
    <div className="work-card bg-lightbg p-5 m-8 max-w-75v min-h-30v md:max-w-40v md:min-h-25v lg:max-w-25v lg:min-h-35v lg:max-h-45v">
      <h1 className="relative underline text-2xl lg:text-3xl">{props.name}</h1>
      <p className="relative inline-flex flex-grow align-center text-md mt-4 mb-4 lg:text-xl font-paragraph">
        {props.description}
      </p>
      <div className="inline-flex bottom-4">
        <a href={props.url} target="_blank" rel="noreferrer noopener">
          <button className="text-md lg:text-lg rounded-md px-3 py-1 lg:py-2 duration-500 text-whitesmoke border hover:text-black hover:bg-whitesmoke">
            {buttonText}
          </button>
        </a>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <div className="flex flex-col min-h-screen flex-grow overflow-visible">
      <h1 className="text-yellow-300 text-center text-4xl md:text-5xl lg:text-6xl leading-normal lg:leading-relaxed font-header font-semibold tracking-wide p-3">
        My Work
      </h1>
      <div className="inline-flex flex-row flex-wrap justify-center">
        <WorkCard
          name="RoyalGuard"
          description="Makes your discord administration experience simple and easy."
          url="https://github.com/bdashore3/RoyalGuard"
        />
        <WorkCard
          name="FileBridge"
          description="An iOS application which bridges the gap between your iDevice and iTunes."
          url="/filebridge"
        />
        <WorkCard
          name="CourtJester"
          description="A multipurpose bot which enhances your discord server experience."
          url="https://github.com/bdashore3/CourtJester"
        />
        <WorkCard
          name="Universal-RPC"
          description="A simple and highly-configurable app that sets your Discord game activity to something custom."
          url="https://github.com/bdashore3/Universal-RPC"
        />
        <WorkCard
          name="Simple Retweets"
          description="A bot that retweets mentioned posts on a configured account."
          url="https://github.com/bdashore3/RoyalGuard"
        />
        <WorkCard
          name="RegalPack"
          description="A minecraft modpack that allows you to choose your own story."
          url="https://files.kingbri.me/RegalPack"
        />
      </div>
    </div>
  );
}
