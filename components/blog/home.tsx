import Link from 'next/link';

import { BlogPostType } from '@/models/Post';

type PostProps = {
  post: BlogPostType;
};

function BlogPostSummary({ post }: PostProps) {
  return (
    <Link href="/blog/post/[slug]" as={`/blog/post/${post.slug}`}>
      <div className="bg-lightbg my-6 font-paragraph px-6 lg:px-10 py-6 rounded-xl leading-spread transform hover:bg-fadebg hover:scale-105 cursor-pointer duration-500">
        <a className="text-blue-300 font-bold text-2xl lg:text-4xl">
          {post.metadata.title ?? 'No Title!'}
        </a>
        {post.metadata.excerpt && <p className="p-4">{post.metadata.excerpt}</p>}
        <hr />
        <div className="mt-1">
          <p className="float-left">by {post.author?.name ?? 'No author'}</p>
          <p className="float-right">{post.metadata.date ?? 'No date'}</p>
          <span className="clear-left block" />
        </div>
      </div>
    </Link>
  );
}

type HomeProps = {
  posts: BlogPostType[];
};

export default function BlogHome({ posts }: HomeProps) {
  const postList = posts.map(
    (post: BlogPostType) =>
      post.slug && (
        <li key={post.slug} className="list-none text-whitesmoke">
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
      <div className="md:max-w-3xl xl:max-w-4xl">
        {postList.length > 0 ? (
          postList
        ) : (
          <p className="text-lg pt-10">There is nothing here. Check back later!</p>
        )}
      </div>
    </div>
  );
}
