import type {
  SanityReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed
} from 'sanity-codegen';

export type {
  SanityReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot
};

export type FullPost = Omit<Post, 'author' | 'categories'> & { author: Author } & {
  categories: Array<SanityKeyed<Category>>;
};

export interface Post extends SanityDocument {
  _type: 'post';
  title?: string;
  slug?: { _type: 'slug'; current: string };
  author?: SanityReference<Author>;
  mainImage?: {
    _type: 'mainImage';
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
  categories?: Array<SanityReference<Category>>;
  publishedAt?: string;
  body?: BlockContent;
}

export interface Author extends SanityDocument {
  _type: 'author';
  name?: string;
  slug?: { _type: 'slug'; current: string };
  image?: {
    _type: 'image';
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
  bio?: Array<SanityBlock>;
}

export interface Category extends SanityDocument {
  _type: 'category';
  title?: string;
  description?: string;
}

export type BlockContent = Array<
  | SanityBlock
  | {
      _type: 'image';
      _key: string;
      asset: SanityAsset;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }
>;

export type Documents = Post | Author | Category;
