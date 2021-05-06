import Head from 'next/head';

import BlogHome from '@/components/blog/home';
import { Separator } from '@/components/utils/misc';
import { sanity } from '@/lib/sanity';
import { FullPost } from '@/models/schema';

interface Props {
  posts: FullPost[];
}

export default function Blog({ posts }: Props) {
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
      <BlogHome posts={posts} />
      <div className="md:hidden">
        <Separator />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = await sanity.fetch<FullPost[]>(
    `*[_type == "post"] | order(publishedAt desc){
      _id,
      title,
      publishedAt,
      excerpt,
      'slug': slug.current,
      'author': author->{name, 'image': image.asset->url},
    }`
  );
  return {
    props: {
      posts: posts
    },
    revalidate: 1
  };
}
