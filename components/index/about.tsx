export default function About() {
  return (
    <div className="flex flex-col min-h-screen grow items-center overflow-visible">
      <h1 className="text-yellow-300 text-center text-4xl md:text-5xl lg:text-6xl lg:leading-spread font-header font-semibold tracking-wide p-3">
        Who am I?
      </h1>
      <div className="md:max-w-3xl xl:max-w-4xl rounded-xl relative bg-lightbg font-medium">
        <p className="text-whitesmoke px-6 lg:px-10 text-md lg:text-lg py-6 font-paragraph tracking-wide leading-spread">
          My name is Brian Dashore, a self-taught hobbyist developer, and I am studying for a degree
          in medicine. I am currently located in Long Island, New York.
          <br />
          <br />
          From sixth grade, I was interested in medicine and learning how the human body works. I’ve
          always had an inherent desire to help people since so many helped me when I suffered
          through chronic illness. I have spent many years over studying biology, anatomy,
          nutrition, and other fields of medicine. Eventually, I was accepted to NYIT’s 7-year BS/DO
          program in February of 2020. I am currently studying there and will obtain my DO in 7
          years. From there, I am planning to study immunology and make a career/practice for
          myself.
          <br />
          <br />I have presented in various conferences in Harvard Spaulding Hospital, Autism One,
          and the International Mold Congress for CEU credits. If you would like to know more about
          my story, please go to{' '}
          <span>
            <a
              href="https://teenlymehub.com"
              className="underline text-blue-300 visited:text-purple-400">
              teenlymehub.com
            </a>
          </span>
          <br />
          <br />
          My work as a developer started at age 15 where I learned how to program in Python and
          created a small mario-kart 2d-game in processing.py. However, I lost interest in
          programming due to a lack of project ideas. I stumbled upon the Android community and
          built my own custom kernel in 2018 using C. In February of 2020, I started programming
          bots using the Discord, Twitch, and Twitter APIs. These bots are semi-popular, and I have
          designed them with goals of educating the public and making my social media life easier.
          Nowadays, I tend to work on applications for Apple products to make various functions on
          their devices easier for the end user.
          <br />
          <br />
          I feel that development ties well into medicine since learning multiple
          languages/principles will allow me to succeed in future medical careers and possibly
          create my own healthcare-oriented software.
          <br />
          <br />
          <span className="text-blue-400">Languages:</span>
          <br />
          <span className="text-yellow-300">Rust, TS, JS, Swift, C#, Python, HTML, CSS, C</span>
          <br />
          <br />
          <span className="text-blue-400">Have used:</span>
          <br />
          <span className="text-yellow-300">
            Unity, SwiftUI, Discord bot API, Twitch API, Twitter bot API, React.js, Nextjs, Tailwind
            CSS, Git
          </span>
        </p>
      </div>
    </div>
  );
}
