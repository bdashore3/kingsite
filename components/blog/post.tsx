import ReactBlockContent from '@sanity/block-content-to-react';
import { sanity, urlFor } from '@/lib/sanity';
import { FullPost } from '@/models/schema';
import Nav from '@/components/index/nav';
import { Separator, CodeSerializer, ImageSerializer } from '@/components/utils/misc';

interface Props {
  postData: FullPost;
}

const serializers = {
  types: {
    code: CodeSerializer,
    imageWithDescription: ImageSerializer
  }
};

export default function BlogPostContent({ postData }: Props) {
  return (
    <article className="text-whitesmoke">
      <Nav />
      <div className="hidden md:block">
        <Separator />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="font-header text-center text-4xl md:text-5xl lg:text-7xl text-yellow-300 p-8">
          {postData.title}
        </h1>
        <div className="bg-lightbg leading-spread px-6 lg:px-10 py-6 font-paragraph md:max-w-3xl xl:max-w-4xl rounded-xl text-lg">
          <ReactBlockContent
            className="blog-post flex flex-col"
            blocks={postData.body}
            {...sanity.config()}
            serializers={serializers}
            renderContainerOnSingleChild
          />
        </div>
        {postData.author.image && (
          <div className="inline-flex flex-col md:flex-row bg-lightbg rounded-xl my-6 lg:max-w-3xl xl:max-w-4xl lg:px-10 py-4 items-center">
            <div className="inline-flex flex-col items-center align-middle flex-nowrap mb-3 md:mb-0">
              <img
                src={urlFor(postData.author.image).width(100).url() || undefined}
                alt="author"
                className="rounded-full"
              />
              <p className="text-lg mt-3 whitespace-nowrap">
                By {postData.author.name || 'No Author?'}
              </p>
            </div>
            <div className="px-10 inline-block font-paragraph text-lg items-center">
              <ReactBlockContent blocks={postData.author.bio} {...sanity.config()} />
            </div>
          </div>
        )}
      </div>
      <div className="md:hidden">
        <Separator />
      </div>
    </article>
  );
}
