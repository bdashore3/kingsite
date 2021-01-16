import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import sanity from '../../../lib/sanity';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { Post } from '../../../@types/sanity-schema';
import Nav from '../../../components/index/nav';
import { Separator } from '../../../components/utils/misc';

function urlFor(source: SanityImageSource) {
  return imageUrlBuilder(sanity).image(source);
}

interface Props {
  title: string;
  name: string;
  categories: Array<string>;
  authorImage: Record<string, unknown>;
  body: Record<string, unknown>;
}

export default function BlogPost(props: Props) {
  return (
    <article className="text-whitesmoke">
      <Nav />
      <Separator id="" />
      <h1>{props.title}</h1>
      <span>By {props.name}</span>
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

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const slug = params.slug;
  const data = await sanity.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      "name": author->name,
      "categories": categories[]->title,
      "authorImage": author->image,
      body
    }`,
    { slug }
  );

  return {
    props: {
      title: data.title,
      name: data.name,
      categories: data?.categories || null,
      authorImage: data?.authorImage || null,
      body: data.body
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
    fallback: true
  };
}
