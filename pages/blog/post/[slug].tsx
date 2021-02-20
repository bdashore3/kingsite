import { sanity } from '@/lib/sanity';
import { FullPost, Post } from '@/models/schema';
import BlogPostContent from '@/components/blog/post';
import Head from 'next/head';
import { useRouter } from 'next/router';
import FourOhFour from 'pages/404';

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
