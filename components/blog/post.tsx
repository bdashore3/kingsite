import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import sanity from '../../lib/sanity';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { Post } from '../../models/schema';
import Nav from '../../components/index/nav';
import { Separator } from '../../components/utils/misc';

function urlFor(source: SanityImageSource) {
  return imageUrlBuilder(sanity).image(source);
}

interface Props {
  postData: Post;
}

export default function BlogPostContent({ postData }: Props) {
  return (
    <article className="text-whitesmoke">
      <Nav />
      <Separator id="" />
      <h1>{postData.title}</h1>
      <span>By {postData.author.name}</span>
      {props.categories && (
        <ul>
          Posted in
          {props.categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      )}
      {props.authorImage && (
        <div>
          <img src={urlFor(props.authorImage).width(50).url() || undefined} alt="" />
        </div>
      )}
      <BlockContent blocks={props.body} {...sanity.config()} />
    </article>
  );
}
