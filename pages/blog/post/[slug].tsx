import Head from 'next/head';
import { useRouter } from 'next/router';

import BlogPostContent from '@/components/blog/post';
import FourOhFour from '@/pages/404';
import { extractPost } from '@/lib/markdown';
import { BlogPostType } from '@/models/Post';
import { getPostFile, getAllPostFiles } from '@/lib/github';

interface Props {
  post: BlogPostType;
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
            <meta property="og:title" content={post.metadata.title} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={'https://kingbri.me/blog/post/' + post.slug} />
            <meta property="og:description" content={post.metadata.excerpt} />
            <meta name="Description" content={post.metadata.excerpt} />
            <meta name="theme-color" content="#ffd700" />
            <title>{post.metadata.title}</title>
            <link
              href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Open+Sans&family=Raleway&display=swap"
              rel="stylesheet"
            />
          </Head>
          <BlogPostContent post={post} />
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

// Grabs post from slug
export async function getStaticProps({ params }: Params) {
  const githubFile = await getPostFile(params.slug);
  const post = await extractPost(githubFile);

  return {
    props: {
      post: post
    },
    revalidate: 1
  };
}

// Grabs all slugs
export async function getStaticPaths() {
  const githubFiles = await getAllPostFiles();

  return {
    paths: githubFiles.map((file) => ({
      params: {
        slug: file.name.replace(/\.md$/, '')
      }
    })),
    fallback: true
  };
}
