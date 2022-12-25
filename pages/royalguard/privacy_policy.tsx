import Head from 'next/head';
import Link from 'next/link';

import { Separator } from '@/components/utils/misc';

export default function RoyalGuardPrivacyPolicy() {
  return <>
    <Head>
      <title>RoyalGuard | Privacy Policy</title>
    </Head>
    <article className="text-whitesmoke">
      <div className="hidden md:block">
        <Separator />
      </div>
      <div className="flex flex-col items-center filebridge-privacy">
        <h1 className="font-header text-center text-4xl md:text-5xl lg:text-7xl text-yellow-300 p-8">
          Privacy Policy
        </h1>
        <div className="inline-flex flex-col bg-lightbg blog-post font-paragraph leading-spread px-6 lg:px-10 py-6 md:max-w-3xl xl:max-w-4xl rounded-xl">
          <p>This is the privacy policy for the RoyalGuard Discord bot.</p>
          <h2>In short</h2>
          <p>
            RoyalGuard may store a limited amount of your messages and Discord user data for
            various features to function. This user data includes a limited amount of message
            content, User IDs, Role IDs, and Server IDs. No personal information is (or will be)
            stored.
          </p>
          <h2>Why?</h2>
          <p>
            RoyalGuard utilizes this data for mandatory and optional features such as:
            <ul>
              <li>User warns</li>
              <li>User mutes/timeouts</li>
              <li>Welcome and leave messages</li>
              <li>Automatic role assignment</li>
              <li>Message logging</li>
              <li>Reaction roles</li>
            </ul>
            <br />
            <p>This list will be updated as RoyalGuard gains more features.</p>
            <br />
            <p>
              If a user kicks RoyalGuard from your server, your server data will be preserved for
              a week (in case the user kicked the bot by accident) and then will be automatically
              deleted.
            </p>
            <br />
            Due to RoyalGuard being free and open source (FOSS), you can view&nbsp;
            <a href="https://github.com/bdashore3/RoyalGuard">the code</a>
            &nbsp;and see exactly how RoyalGuard uses your data.{' '}
          </p>
          <h3>Contact the developer</h3>
          <p>
            If you have any questions with this Privacy Policy or want to have your data manually
            removed, please contact me using any of the methods from{' '}
            <Link href="https://kingbri.dev/socials">
              https://kingbri.dev/socials
            </Link>
          </p>
        </div>
      </div>
      <div className="md:hidden">
        <Separator />
      </div>
    </article>
  </>;
}
