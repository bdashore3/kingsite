import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import sanity from '../../lib/sanity';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { FullPost } from '../../models/schema';
import Nav from '../../components/index/nav';
import { Separator } from '../../components/utils/misc';

function urlFor(source: SanityImageSource) {
  return imageUrlBuilder(sanity).image(source);
}

interface Props {
  postData: FullPost;
}

export default function BlogPostContent({ postData }: Props) {
  return (
    <article className="text-whitesmoke">
      <Nav />
      <Separator id="" />
      <h1>{postData.title}</h1>
      <span>By {postData.author.name}</span>
      {postData.categories && (
        <ul>
          Posted in
          {postData.categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      )}
      {postData.author.image && (
        <div>
          <img src={urlFor(postData.author.image).width(50).url() || undefined} alt="" />
        </div>
      )}
      <BlockContent blocks={postData.body} {...sanity.config()} />
    </article>
  );
}
