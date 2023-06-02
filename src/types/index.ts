export type Image = {
  jpg: string;
  webp: string;
  original?: string;
};

export type Project = {
  title: string;
  description: {
    html: string;
  };
  publishedIn?: number;
  image: Image;
  publicUrl?: string;
  githubUrl?: string;
  category: string;
  tags: string[];
  excerpt: string;
  slug: string;
};

export type Post = {
  title: string;
  description: string;
  excerpt: string;
  slug: string;
  published: string;
  image: Image;
  content: string;
  externalUrl: string;
};

export type Meta = {
  title: string;
  description: string;
};

export type Technology = {
  name: string;
};

export type Testimonial = {
  content: string;
  author: string;
  jobTitle: string;
  company?: string;
  website?: string;
};
