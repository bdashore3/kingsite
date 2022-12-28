import matter from 'gray-matter';
import { GithubFile } from '@/models/GitHub';
import { BlogPostAuthor, BlogPostMetadata, BlogPostType } from '@/models/Post';
import { getAuthorFiles } from './github';

async function getMarkdownContent(fileUrl: URL): Promise<string> {
  const response = await fetch(fileUrl);
  const responseText = await response.text();
  return responseText;
}

export async function extractPost(githubFile: GithubFile, metaOnly: boolean = false) {
  const slug = githubFile.name.replace(/\.md$/, '');
  const fileContents = await getMarkdownContent(new URL(githubFile.download_url));

  const { data, content } = matter(fileContents);
  let post: BlogPostType = {
    slug: slug,
    metadata: { ...data } as BlogPostMetadata,
    author: metaOnly ? { name: data['author'] } : await getAuthor(data['author']),
    content: metaOnly ? '' : content
  };

  // Done so NextJS doesn't complain about undefined
  return JSON.parse(JSON.stringify(post));
}

async function getAuthor(name: string): Promise<BlogPostAuthor> {
  const authorInfo = await getAuthorFiles(name);
  const authorBioFile = authorInfo.find((e) => e.name == 'bio.md');
  const authorImageFile = authorInfo.find((e) => {
    const split = e.name.split('.');
    return split[0] == 'pfp' && split[1].match(/jpg|jpeg|png|gif$/i);
  });

  return {
    name: name,
    bio: authorBioFile ? await getMarkdownContent(new URL(authorBioFile?.download_url)) : undefined,
    imageUrl: authorImageFile?.download_url
  };
}
