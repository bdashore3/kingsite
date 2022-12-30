export type BlogPostType = {
  slug: string;
  metadata: BlogPostMetadata;
  author?: BlogPostAuthor;
  content?: string;
};

export type BlogPostMetadata = {
  title?: string;
  date?: string;
  excerpt?: string;
};

export type BlogPostAuthor = {
  name: string;
  bio?: string;
  imageUrl?: string;
};
