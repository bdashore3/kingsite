import { BlogPostType } from '@/models/Post';
import { Separator } from '../utils/misc';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface Props {
  post: BlogPostType;
}

export default function BlogPostContent({ post }: Props) {
  return (
    <article>
      <div className="hidden md:block">
        <Separator />
      </div>
      <div className="flex flex-col md:items-center">
        <h1 className="font-semibold text-center text-2xl lg:text-4xl text-yellow-200 p-8 md:max-w-3xl xl:max-w-4xl">
          {post.metadata.title ?? 'No Title!'}
        </h1>
        <div className="bg-lightbg px-6 lg:px-10 py-6 font-paragraph md:max-w-3xl xl:max-w-4xl rounded-xl text-lg">
          <div className="blog-post flex flex-col">
            <ReactMarkdown
              remarkPlugins={[gfm]}
              children={post.content}
              components={{
                code({ inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, '')}
                      style={a11yDark}
                      language={match[1]}
                      PreTag="div"
                    />
                  ) : (
                    <code
                      className={`${className} whitespace-pre-line bg-gray-900 p-1 rounded-lg`}
                      {...props}>
                      {children}
                    </code>
                  );
                }
              }}
            />
          </div>
        </div>
        <div className="inline-flex flex-col md:flex-row bg-lightbg rounded-xl my-6 lg:max-w-3xl xl:max-w-4xl lg:px-10 py-4 items-center">
          <div className="inline-flex flex-col items-center align-middle flex-nowrap mb-3 md:mb-0">
            <img
              src={post.author.imageUrl}
              alt="author"
              className="rounded-full"
              width={100}
              height={100}
            />
            <p className="text-lg mt-3 whitespace-nowrap">By {post.author.name ?? 'No author!'}</p>
          </div>
          <div className="px-10 inline-block font-paragraph text-lg items-center">
            <p>{post.author.bio ?? "This author doesn't have a bio!"}</p>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <Separator />
      </div>
    </article>
  );
}
