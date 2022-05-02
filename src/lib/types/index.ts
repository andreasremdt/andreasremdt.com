export interface Project {
  title: string;
  description: {
    html: string;
  };
  publishedIn?: number;
  image: Image;
  publicUrl?: string;
  githubUrl?: string;
  tags: string[];
  excerpt: string;
  slug: string;
}

export interface Post {
  title: string;
  excerpt: string;
  slug: string;
  published: string;
  image: Image;
  content: string;
  externalUrl: string;
}

export interface Technology {
  name: string;
}

export interface Image {
  jpg: string;
  webp: string;
}

export interface SocialLink {
  name: string;
  title: string;
  url: string;
}

export interface PageMeta {
  title: string;
  description: string;
}
