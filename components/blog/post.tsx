import { BlogPostType } from '@/models/Post';
import { Separator } from '../utils/misc';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
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
            {post.content ? (
              <ReactMarkdown
                remarkPlugins={[gfm]}
                rehypePlugins={[rehypeRaw]}
                children={post.content}
                components={{
                  p({ children }) {
                    if (
                      children.find((child) => {
                        if (React.isValidElement(child)) {
                          return child.type === 'img';
                        }
                      })
                    ) {
                      return <p className="self-center" children={children} />;
                    } else {
                      return <p children={children} />;
                    }
                  },
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
            ) : (
              <p>There is nothing here. Check back later!</p>
            )}
          </div>
        </div>
        {post.content && (
          <div className="inline-flex flex-col md:flex-row bg-lightbg rounded-xl my-6 lg:max-w-3xl xl:max-w-4xl lg:px-10 py-4 items-center">
            {post.author ? (
              <>
                <div className="inline-flex flex-col items-center align-middle flex-nowrap mb-3 md:mb-0">
                  <img
                    src={post.author.imageUrl}
                    alt="author"
                    className="rounded-full"
                    width={100}
                    height={100}
                  />
                  <p className="text-lg mt-3 whitespace-nowrap">By {post.author.name}</p>
                </div>
                <div className="px-10 inline-block font-paragraph text-lg items-center">
                  {post.author.bio}
                </div>
              </>
            ) : (
              <p className="text-lg">There is no author here! Who made this post?</p>
            )}
          </div>
        )}
      </div>
      <div className="md:hidden">
        <Separator />
      </div>
    </article>
  );
}
