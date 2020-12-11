export default function Work() {
    return(
        <div className="flex flex-flow-c min-h-screen">
        <div id="work" className="h-18"></div>
        <div className="inline-flex flex-flow-c flex-grow overflow-visible">
          <h1
            className="text-yellow-300 text-center text-6xl font-header font-semibold tracking-wide p-3"
          >
            My Work
          </h1>
          <div className="inline-flex flex-grow items-center justify-items-center">
            <div className="grid-container gap-y-16 gap-x-16 w-full px-32">
              <div className="grid-item p-5">
                <h1 className="underline text-3xl">RoyalGuard</h1>
                <p className="mt-16 text-xl font-paragraph">
                  Make your discord administration experience simple and easy.
                </p>
                <div className="inline-flex absolute bottom-4">
                  <a
                    href="https://github.com/bdashore3/RoyalGuard"
                    target="_blank"
                  >
                    <button
                      className="text-lg rounded-md px-3 py-2 duration-500 text-whitesmoke border hover:text-black hover:bg-whitesmoke"
                    >
                      View source code
                    </button>
                  </a>
                </div>
              </div>
              <div className="grid-item p-5">
                <h1 className="underline text-3xl">CourtJester</h1>
                <p className="mt-16 text-xl font-paragraph">
                  A multipurpose bot which enhances your discord server
                  experience.
                </p>
                <div className="inline-flex absolute bottom-4">
                  <a
                    href="https://github.com/bdashore3/CourtJester"
                    target="_blank"
                  >
                    <button
                      className="text-lg rounded-md px-3 py-2 duration-500 text-whitesmoke border hover:text-black hover:bg-whitesmoke"
                    >
                      View source code
                    </button>
                  </a>
                </div>
              </div>
              <div className="grid-item p-5">
                <h1 className="underline text-3xl">Simple Retweets</h1>
                <p className="mt-16 text-xl font-paragraph">
                  A bot that retweets mentioned posts on a configured account.
                </p>
                <div className="inline-flex absolute bottom-4">
                  <a
                    href="https://github.com/bdashore3/Simple-Retweets"
                    target="_blank"
                  >
                    <button
                      className="text-lg rounded-md px-3 py-2 duration-500 text-whitesmoke border hover:text-black hover:bg-whitesmoke"
                    >
                      View source code
                    </button>
                  </a>
                </div>
              </div>
              <div className="grid-item p-5">
                <h1 className="text-3xl underline">KingBot-Twitch</h1>
                <p className="mt-16 text-xl font-paragraph">
                  My personal bot for Twitch. Is currently being rewritten in
                  Rust.
                </p>
                <div className="inline-flex absolute bottom-4">
                  <a href="https://github.com/bdashore3/KingBot" target="_blank">
                    <button
                      className="text-lg rounded-md px-3 py-2 duration-500 text-whitesmoke border hover:text-black hover:bg-whitesmoke"
                    >
                      View source code
                    </button>
                  </a>
                </div>
              </div>
              <div className="grid-item p-5">
                <h1 className="text-3xl underline">KingKernel</h1>
                <p className="mt-16 text-xl font-paragraph">
                  A custom kernel for the Google Pixel lineup focused on making
                  life simpler.
                </p>
                <div className="inline-flex absolute bottom-4">
                  <a href="https://github.com/King-Kernel/" target="_blank">
                    <button
                      className="text-lg rounded-md px-3 py-2 duration-500 text-whitesmoke border hover:text-black hover:bg-whitesmoke"
                    >
                      View source code
                    </button>
                  </a>
                </div>
              </div>
              <div className="grid-item p-5">
                <h1 className="text-3xl underline">TypeMap Revitalized</h1>
                <p className="text-xl mt-10 font-paragraph">
                  A hashmap, but uses types as keys. You can put anything in
                  there!
                  <br />
                  (Collaboration with serenity-rs)
                </p>
                <div className="inline-flex absolute bottom-4">
                  <a
                    href="https://github.com/bdashore3/typemap_rev"
                    target="_blank"
                  >
                    <button
                      className="text-xl rounded-md px-3 py-2 duration-500 text-whitesmoke border hover:text-black hover:bg-whitesmoke"
                    >
                      View source code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
