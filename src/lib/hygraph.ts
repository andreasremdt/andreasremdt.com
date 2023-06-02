import type {
  Project,
  Post,
  Meta,
  Image,
  Technology,
  Testimonial,
} from "types/index";

import { marked } from "marked";

async function request(query: string) {
  const response = await fetch(import.meta.env.HYGRAPH_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ query }),
  });

  return response.json();
}

export async function getAllTestimonials(): Promise<Testimonial[]> {
  const { data } = await request(`
    query GetAllTestimonials {
      testimonials {
        website
        jobTitle
        company
        author
        content
      }
    }
  `);

  return data.testimonials;
}

export async function getPageMeta(slug: string): Promise<Meta> {
  const { data } = await request(`
    query GetPageMeta {
      meta: page(where: {slug: "${slug}"}) {
        title
        description
      }
    }
  `);

  return data.meta;
}

export async function getPortrait(): Promise<Image> {
  const { data } = await request(`
    query GetPortrait {
      portrait: asset(where: {id: "cl0i713joxpv60ez8x71adamx"}) {
        webp: url(
          transformation: {image: {resize: {width: 350, height: 350, fit: clip}}, document: {output: {format: webp}}}
        )
        jpg: url(
          transformation: {image: {resize: {width: 350, height: 350, fit: clip}}}
        )
      }
    }
  `);

  return data.portrait;
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const { data } = await request(`
    query GetFeaturedProjects {
      projects(where: { featured: true }) {
        title
        excerpt
        publicUrl
        slug
        tags
        image {
          webp: url(
            transformation: {image: {resize: {width: 700, fit: max}}, document: {output: {format: webp}}}
          )
          jpg: url(
            transformation: {image: {resize: {width: 700, fit: max}}}
          )
        }
      }
    }
  `);

  return data.projects;
}

export async function getAllProjects(): Promise<Project[]> {
  const { data } = await request(`
    query GetAllProjects {
      projects(orderBy: publishedIn_DESC) {
        excerpt
        title
        publicUrl
        category
        tags
        image {
          webp: url(
            transformation: {image: {resize: {width: 500, fit: max}}, document: {output: {format: webp}}}
          )
          jpg: url(
            transformation: {image: {resize: {width: 500, fit: max}}}
          )
        }
        slug
      }
    }
  `);

  return data.projects;
}

export async function getProjectBySlug(slug: string): Promise<Project> {
  const { data } = await request(`
    query GetProjectBySlug() {
      project(where: { slug: "${slug}" }) {
        description {
          html
        }
        publishedIn
        title
        image {
          webp: url(
            transformation: {image: {resize: {width: 1120, fit: max}}, document: {output: {format: webp}}}
          )
          jpg: url(
            transformation: {image: {resize: {width: 1120, fit: max}}}
          )
        }
        publicUrl
        githubUrl
        excerpt
        tags
      }
    }
  `);

  return data.project;
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const { data } = await request(`
    query GetFeaturedPosts {
      posts(first: 3, orderBy: published_DESC) {
        title
        slug
        excerpt
        image {
          webp: url(
            transformation: {image: {resize: {width: 750, fit: max}}, document: {output: {format: webp}}}
          )
          jpg: url(
            transformation: {image: {resize: {width: 750, fit: max}}}
          )
        }
        published
      }
    }
  `);

  return data.posts;
}

export async function getAllPosts(): Promise<Post[]> {
  const { data } = await request(`
    query GetAllPosts {
      posts(orderBy: published_DESC) {
        title
        slug
        excerpt
        image {
          webp: url(
            transformation: {image: {resize: {width: 700, height: 400, fit: crop}}, document: {output: {format: webp}}}
          )
          jpg: url(
            transformation: {image: {resize: {width: 700, height: 400, fit: crop}}}
          )
        }
        published
      }
    }
  `);

  return data.posts;
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const { data } = await request(`
    query GetPostBySlug() {
      post(where: { slug: "${slug}" }) {
        published
        title
        description
        content_markdown
        externalUrl
        image {
          webp: url(
            transformation: {image: {resize: {width: 1120, fit: max}}, document: {output: {format: webp}}}
          )
          jpg: url(
            transformation: {image: {resize: {width: 1120, fit: max}}}
          )
        }
      }
    }
  `);

  return { ...data.post, content: marked(data.post.content_markdown) };
}

export async function getAllTechnologies(): Promise<Technology[]> {
  const { data } = await request(`
    query GetAllTechnologies {
      technologies {
        name
      }
    }
  `);

  return data.technologies;
}

export async function getGalleryBySlug(slug: string): Promise<Image[]> {
  const { data } = await request(`
    query GetGalleryBySlug {
      gallery(where: {name: "${slug}"}) {
        images {
          webp: url(
            transformation: {image: {resize: {width: 300, fit: max}}, document: {output: {format: webp}}}
          )
          jpg: url(
            transformation: {image: {resize: {width: 300, fit: max}}}
          )
          original: url
        }
      }
    }
  `);

  return data.gallery.images;
}
