import { sanity } from '@/lib/sanity';
import { FullPost, Post } from '@/models/schema';
import BlogPostContent from '@/components/blog/post';
import Head from 'next/head';

interface Props {
  post: FullPost;
}

export default function BlogPost({ post }: Props) {
  return (
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
      'author': author->{name, 'image': image.asset->url, 'bio': bio[]},
      body
    }`,
    { slug }
  );

  if (!post) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      post
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
    fallback: false
  };
}
