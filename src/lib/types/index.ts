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
  content: {
    html: string;
  };
  externalUrl: string;
}

export interface Technology {
  name: string;
}

export interface Image {
  jpg: string;
  webp: string;
}
