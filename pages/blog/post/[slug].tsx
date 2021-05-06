import Head from 'next/head';
import { useRouter } from 'next/router';

import BlogPostContent from '@/components/blog/post';
import { blockToString } from '@/components/utils/misc';
import { sanity } from '@/lib/sanity';
import { FullPost, Post } from '@/models/schema';
import FourOhFour from '@/pages/404';

interface Props {
  post: FullPost;
}

export default function BlogPost({ post }: Props) {
  const router = useRouter();

  if (!router.isFallback && !post.slug) {
    return <FourOhFour />;
  }

  return (
    <>
      {router.isFallback ? (
        <h1 className="flex flex-col justify-center text-center font-navigation min-h-screen text-4xl md:text-5xl lg:text-7xl p-8">
          Loading...
        </h1>
      ) : (
        <>
          <Head>
            <meta property="og:title" content={post.title} />
            <meta property="og:type" content="website" />
            <meta
              property="og:url"
              content={'https://kingbri.me/blog/post/' + post.slug?.current}
            />
            <meta property="og:description" content={blockToString(post.excerpt)} />
            <meta name="Description" content={blockToString(post.excerpt)} />
            <meta name="theme-color" content="#ffd700" />
            <title>{post.title}</title>
            <link
              href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Open+Sans&family=Raleway&display=swap"
              rel="stylesheet"
            />
          </Head>
          <BlogPostContent postData={post} />
        </>
      )}
    </>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const slug = params.slug;
  const post = await sanity.fetch<FullPost>(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      slug,
      excerpt,
      'author': author->{name, 'image': image.asset->url, 'bio': bio[]},
      body
    }`,
    { slug }
  );

  return {
    props: {
      post: post || null
    },
    revalidate: 1
  };
}

export async function getStaticPaths() {
  const allPosts = await sanity.fetch(`*[_type == "post"]{ 'slug': slug.current }`);
  return {
    paths:
      allPosts?.map((post: Post) => ({
        params: {
          slug: post.slug
        }
      })) || [],
    fallback: true
  };
}
