export default function About() {
    return(
        <div className="flex flex-col min-h-screen border-solid">
            <div
                className="flex-grow inline-flex items-center flex-col overflow-visible"
            >
            <h1
                className="text-yellow-300 text-center text-4xl md:text-5xl lg:text-6xl leading-normal lg:leading-relaxed font-header font-semibold tracking-wide p-3"
            >
                Who am I?
            </h1>
            <div
                className="lg:px-10 mx-4 lg:mx-48 rounded-3xl relative bg-lightbg font-medium max-w-7xl"
            >
            <p className="text-whitesmoke text-sm lg:text-xl p-6 font-paragraph tracking-wide leading-normal lg:leading-relaxed">
                My name is Brian Dashore, a self-taught hobbyist developer, and I am
                studying for a degree in medicine. I am currently located in Long
                Island, New York.
                <br />
                <br />
                From sixth grade, I was interested in medicine and learning how the
                human body works. I’ve always had an inherent desire to help people
                since so many helped me when I suffered through chronic illness. I
                have spent many years over studying biology, anatomy, nutrition, and
                other fields of medicine. Eventually, I was accepted to NYIT’s
                7-year BS/DO program in February of 2020. I am currently studying
                there and will obtain my DO in 7 years. From there, I am planning to
                study immunology and make a career/practice for myself.
                <br />
                <br />
                I have presented in various conferences in Harvard Spaulding
                Hospital, Autism One, and the International Mold Congress for CEU
                credits. If you would like to know more about my story, please go to <span>
                <a href="https://teenlymehub.com" className="underline text-blue-300">
                    teenlymehub.com
                </a>
                </span>
                <br />
                <br />
                My work as a developer started at age 15 where I learned how to
                program in Python and created a small mario-kart 2d-game in
                processing.py. However, I lost interest in programming due to a lack
                of project ideas. I stumbled upon the Android community and built my
                own custom kernel in 2018 using C. In February of 2020, I started
                programming bots using the Discord, Twitch, and Twitter APIs. These
                bots are semi-popular, and I have designed them with goals of
                educating the public and making my social media life easier.
                <br />
                <br />
                I feel that development ties well into medicine and learning
                multiple languages/principles will allow me to succeed in future
                medical careers and possibly create my own software.
                <br />
                <br />
                <span className="text-blue-400">Languages:</span>
                <br />
                <span className="text-yellow-300 ws-s">Rust, C#, HTML, CSS, JS, Python, C
                </span>
                <br />
                <br />
                <span className="text-blue-400">Have used:</span>
                <br />
                <span className="text-yellow-300">
                    Discord bot API, Twitch API, Twitter bot API, Tailwind CSS, Git
                </span>
            </p>
            </div>
            </div>
        </div>
    )
}