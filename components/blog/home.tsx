import { FullPost } from '@/models/schema';
import Link from 'next/link';

interface Props {
  posts: FullPost[];
}

export default function BlogHome({ posts }: Props) {
  const postList = posts.map(
    (post: FullPost) =>
      post.slug && (
        <li key={post._id} className="text-whitesmoke">
          <Link href="/blog/post/[slug]" as={`/blog/post/${post.slug}`}>
            <a>{post.title}</a>
          </Link>{' '}
          <span>{post.author.name}</span>
        </li>
      )
  );

  return (
    <div>
      <h1 className="text-7xl text-yellow-300 font-header text-center">Blog</h1>
      {postList}
    </div>
  );
}
