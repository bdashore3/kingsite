import Head from 'next/head';

//import BlogHome from '@/components/blog/home';
import { Separator } from '@/components/utils/misc';
import { BlogPostType } from '@/models/Post';
import { extractPost } from '@/lib/markdown';
import BlogHome from '@/components/blog/home';
import { getAllPostFiles } from '@/lib/github';

interface Props {
  allPosts: BlogPostType[];
}

export default function Blog({ allPosts }: Props) {
  return (
    <>
      <Head>
        <meta property="og:title" content="Brian Dashore | Blog" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kingbri.me/blog" />
        <meta
          property="og:description"
          content="This is Brian Dashore's personal blog. I post a lot of random things here. All opinions are my own."
        />
        <meta
          name="Description"
          content="This is Brian Dashore's personal blog. I post a lot of random things here. All opinions are my own."
        />
        <meta
          property="og:image"
          content="https://avatars1.githubusercontent.com/u/8082010?s=460&u=6f29bfc7183955182abe0625dc1cc8054db0f2b9&v=4"
        />
        <meta name="theme-color" content="#ffd700" />
        <link rel="icon" type="image/svg" href="/favicon.svg" />
        <title>Blog</title>
      </Head>
      <div className="hidden md:block">
        <Separator />
      </div>
      <BlogHome posts={allPosts} />
      <div className="md:hidden">
        <Separator />
      </div>
    </>
  );
}

// Get all posts and synthesize their excerpts
export async function getStaticProps() {
  const githubFiles = await getAllPostFiles();
  const postPromises: Promise<BlogPostType>[] = [];

  if (githubFiles.length > 0) {
    githubFiles.forEach((file) => {
      postPromises.push(extractPost(file, true));
    });
  }

  const allPosts = (await Promise.allSettled(postPromises))
    .filter((p) => p.status === 'fulfilled')
    .map((p) => (p as PromiseFulfilledResult<BlogPostType>).value)
    .sort((post1, post2) => {
      if (post1.metadata.date === undefined || post2.metadata.date === undefined) {
        return -1;
      } else if (post1.metadata.date > post2.metadata.date) {
        return -1;
      } else {
        return 1;
      }
    });

  return {
    props: { allPosts },
    revalidate: 1
  };
}
