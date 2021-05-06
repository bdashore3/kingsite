import SocialImages from '@/models/SocialImages';

interface Props {
  name: string;
  color: string;
  svgPath: string;
  url: string;
}

// Function for a single social icon
export function SocialButton(props: Props) {
  return (
    <li className="px-2 md:px-3">
      <a href={props.url} aria-label={props.name} target="_blank" rel="noreferrer noopener">
        <svg viewBox="0 0 24 24" className={`contact-button ${props.color}`}>
          <path d={props.svgPath} />
        </svg>
      </a>
    </li>
  );
}

export default function Socials() {
  return (
    <footer id="socials" className="flex justify-center p-8">
      <div className="inline-flex flex-col justify-center">
        <h1 className="text-yellow-300 text-3xl lg:text-4xl text-center font-header font-semibold">
          Social Links
        </h1>
        <ul className="py-10 flex items-center">
          <SocialButton
            name="email"
            url="mailto:bdashore3@gmail.com"
            color="hover:text-green-400"
            svgPath={SocialImages.Mail}
          />
          <SocialButton
            name="github"
            url="https://github.com/bdashore3"
            color="hover:text-orange-400"
            svgPath={SocialImages.Github}
          />
          <SocialButton
            name="twitter"
            url="https://twitter.com/kingbri1st"
            color="hover:text-twitter"
            svgPath={SocialImages.Twitter}
          />
          <SocialButton
            name="discord"
            url="https://discord.gg/pswt7by"
            color="hover:text-blurple"
            svgPath={SocialImages.Discord}
          />
          <SocialButton
            name="twitch"
            url="https://twitch.tv/kingbrigames"
            color="hover:text-purple-600"
            svgPath={SocialImages.Twitch}
          />
          <SocialButton
            name="youtube"
            url="https://www.youtube.com/channel/UCuGB6NqD6HJlXiGGxpVqxhw"
            color="hover:text-red-600"
            svgPath={SocialImages.YouTube}
          />
        </ul>
      </div>
    </footer>
  );
}
