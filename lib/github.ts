import { GithubFile } from '@/models/GitHub';

const baseUrl = 'https://api.github.com/repos/bdashore3/kingsite-blog/contents';

// Fetches all posts from Github API
export async function getAllPostFiles(): Promise<GithubFile[]> {
  const response = await fetch(`${baseUrl}/Posts`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
    }
  });

  return (await response.json()) as GithubFile[];
}

// Fetches a single post from Github API
export async function getPostFile(slug: string): Promise<GithubFile> {
  const response = await fetch(`${baseUrl}/Posts/${slug}.md`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
    }
  });

  return (await response.json()) as GithubFile;
}

// Fetches an author from Github API
export async function getAuthorFiles(name: string): Promise<GithubFile[]> {
  const response = await fetch(`${baseUrl}/Authors/${name}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
    }
  });

  return (await response.json()) as GithubFile[];
}
