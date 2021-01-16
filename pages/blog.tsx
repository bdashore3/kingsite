import Link from 'next/link';
import sanity from '../lib/sanity';
import BlogHome from '../components/blog/home';
import Nav from '../components/index/nav';
import { Separator } from '../components/utils/misc';
import { Post } from '../@types/sanity-schema';

import Head from 'next/head';

interface Props {
  posts: Array<Post>;
}

export default function Blog(props: Props) {
  const { posts = [] } = props;
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
      <BlogHome />
      {posts.map(
        ({ _id, title = '', slug = '', _updatedAt = '' }: any) =>
          slug && (
            <li key={_id} className="text-whitesmoke">
              <Link href="/blog/post/[slug]" as={`/blog/post/${slug.current}`}>
                <a>{title}</a>
              </Link>{' '}
              ({new Date(_updatedAt).toDateString()})
            </li>
          )
      )}
    </div>
  );
}

export async function getStaticProps() {
  const posts = await sanity.fetch(`*[_type == "post"]|order(publishedAt desc)`);
  return {
    props: {
      posts: posts
    },
    revalidate: 1
  };
}
