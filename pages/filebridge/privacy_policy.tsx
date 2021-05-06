import Head from 'next/head';
import Link from 'next/link';

import { Separator } from '@/components/utils/misc';

export default function FileBridgePrivacyPolicy() {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg" href="/FileBridge.svg" />
        <title>FileBridge | Privacy Policy</title>
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
            <p>This is the privacy policy for the FileBridge iOS/iPad OS application.</p>
            <h2>In short</h2>
            <p>FileBridge and the developer (Brian Dashore) do not collect your data. Period.</p>
            <h2>Why?</h2>
            <p>
              FileBridge is an app meant to run locally on your iDevice. The only contents pulled
              from the internet are tutorial videos used in the “Guides” section of the app.
              <br />
              <br />
              Due to the app being free and open source (FOSS), you can view&nbsp;
              <a href="https://github.com/bdashore3/FileBridge">the code</a>
              &nbsp;and see that the app physically cannot collect your data.{' '}
            </p>
            <h2>Does this comply with COPPA?</h2>
            <p>
              Yes, FileBridge does comply with the Children&apos;s Online Privacy Protection Act.
              Personal information is not collected from anyone which includes individuals under the
              age of 13.
            </p>
            <h3>Contact the developer</h3>
            <p>
              If you have any questions with this Privacy Policy, please contact me using any of the
              methods from{' '}
              <Link href="https://kingbri.me/socials">
                <a>https://kingbri.me/socials</a>
              </Link>
            </p>
          </div>
        </div>
        <div className="md:hidden">
          <Separator />
        </div>
      </article>
    </>
  );
}
