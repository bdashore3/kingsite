import sanity from '@/lib/sanity';
import { FullPost, Post } from '@/models/schema';
import BlogPostContent from '@/components/blog/post';

interface Props {
  postData: FullPost;
}

export default function BlogPost({ postData }: Props) {
  return <BlogPostContent postData={postData} />;
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const slug = params.slug;
  const postData = await sanity.fetch<FullPost>(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      'author': author->{name, 'image': image.asset->url},
      'categories': categories[]->title,
      body
    }`,
    { slug }
  );

  return {
    props: {
      postData
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
