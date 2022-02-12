export interface Project {
  title: string;
  description: {
    html: string;
  };
  publishedIn: number;
  image: {
    url: string;
  };
  publicUrl: string;
  githubUrl: string;
  tags: string[];
  excerpt: string;
  slug: string;
}

export interface Post {
  title: string;
  excerpt: string;
  slug: string;
  published: string;
  image: {
    url: string;
  };
  content: {
    html: string;
  };
  externalUrl: string;
}
