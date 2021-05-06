import Link from 'next/link';

import { sanity } from '@/lib/sanity';
import { FullPost } from '@/models/schema';
import ReactBlockContent from '@sanity/block-content-to-react';

type PostProps = {
  post: FullPost;
};

function BlogPostSummary({ post }: PostProps) {
  return (
    <Link href="/blog/post/[slug]" as={`/blog/post/${post.slug}`}>
      <div className="bg-lightbg my-6 font-paragraph px-6 lg:px-10 py-6 rounded-xl leading-spread transform hover:bg-fadebg hover:scale-105 cursor-pointer duration-500">
        <a className="text-blue-300 font-bold text-3xl lg:text-4xl">{post.title}</a>
        {post.excerpt && (
          <ReactBlockContent
            className="text-whitesmoke text-lg p-4"
            blocks={post.excerpt}
            {...sanity.config()}
            renderContainerOnSingleChild
          />
        )}
        <hr />
        <div className="mt-1">
          <p className="float-left">by {post.author.name}</p>
          <p className="float-right">{new Date(post.publishedAt || '').toDateString()}</p>
          <span className="clear-left block" />
        </div>
      </div>
    </Link>
  );
}

type HomeProps = {
  posts: FullPost[];
};

export default function BlogHome({ posts }: HomeProps) {
  const postList = posts.map(
    (post: FullPost) =>
      post.slug && (
        <li key={post._id} className="list-none text-whitesmoke">
          <BlogPostSummary post={post} />
        </li>
      )
  );

  return (
    <div className="flex flex-col items-center justify-items-center">
      <h1 className="text-6xl lg:text-7xl text-yellow-300 font-header text-center p-6">Blog</h1>
      <h2 className="text-whitesmoke text-center text-2xl md:text-3xl font-header p-3">
        This is where I post all my thoughts in writing. Enjoy!
      </h2>
      <div className="md:max-w-3xl xl:max-w-4xl">{postList}</div>
    </div>
  );
}
