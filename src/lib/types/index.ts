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
