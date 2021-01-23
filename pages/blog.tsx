import Link from 'next/link';
import sanity from '../lib/sanity';
import BlogHome from '../components/blog/home';
import BlogPost from '../components/blog/post';
import Nav from '../components/index/nav';
import { Separator } from '../components/utils/misc';
import { Post } from '../models/schema';

import Head from 'next/head';

interface Props {
  posts: Post[];
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
  const posts = await sanity.fetch<Post[]>(
    `*[_type == "post"] | order(publishedAt desc){
      _id,
      title,
      publishedAt,
      excerpt,
      'slug': slug.current,
      'author': author->{name, 'picture': image.asset->url},
    }`
  );
  return {
    props: {
      posts: posts
    },
    revalidate: 1
  };
}
