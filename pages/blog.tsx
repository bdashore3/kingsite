import sanity from '../lib/sanity';
import BlogHome from '../components/blog/home';
import Nav from '../components/index/nav';
import { Separator } from '../components/utils/misc';

import Head from 'next/head';
import { FullPost } from '../models/schema';

interface Props {
  posts: FullPost[];
}

export default function Blog({ posts }: Props) {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Open+Sans&family=Raleway&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      <Separator id="" />
      <BlogHome posts={posts} />
    </div>
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
