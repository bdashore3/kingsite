export type GithubFile = {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  download_url: string;
  type: string;
  content?: string;
  encoding?: string;
  _links: Links;
};

export type Links = {
  self: string;
  git: string;
  html: string;
};
