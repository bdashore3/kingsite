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

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: 'slug'; current: string };

  /**
   * Author — `reference`
   *
   *
   */
  author?: SanityReference<Author>;

  /**
   * Main image — `image`
   *
   *
   */
  mainImage?: {
    _type: 'mainImage';
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Categories — `array`
   *
   *
   */
  categories?: Array<SanityReference<Category>>;

  /**
   * Published at — `datetime`
   *
   *
   */
  publishedAt?: string;

  /**
   * Excerpt — `excerptPortableText`
   *
   * This ends up on summary pages, on Google, when people share your post in social media.
   */
  excerpt?: ExcerptPortableText;

  /**
   * Body — `array`
   *
   * The post body, can put images, code, and text for the post.
   */
  body?: Array<SanityBlock | ImageWithDescription | Code>;
}

/**
 * Author
 *
 *
 */
export interface Author extends SanityDocument {
  _type: 'author';

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: 'slug'; current: string };

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: 'image';
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Bio — `array`
   *
   *
   */
  bio?: Array<SanityBlock>;
}

/**
 * Category
 *
 *
 */
export interface Category extends SanityDocument {
  _type: 'category';

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `text`
   *
   *
   */
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

export type ExcerptPortableText = Array<SanityBlock>;

export type ImageWithDescription = {
  _type: 'imageWithDescription';
  asset: SanityAsset;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;

  /**
   * alt — `string`
   *
   *
   */
  alt?: string;
};

export type Documents = Post | Author | Category;

export type Code = {
  language: string;
  code: string;
};
