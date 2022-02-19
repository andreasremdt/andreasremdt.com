<script context="module" lang="ts">
  import { GraphQLClient } from "graphql-request";

  export async function load() {
    const graphcms = new GraphQLClient(
      "https://api-eu-central-1.graphcms.com/v2/ckzekldqw3bp001z1fxyv2ohm/master",
      {
        headers: {},
      }
    );

    const { projects, posts } = await graphcms.request(`
      {
        projects(where: {featured: true}) {
          excerpt
          title
          image {
            url
          }
          publicUrl
          slug
          tags
        }
        posts(first: 3, orderBy: published_DESC) {
          title
          slug
          excerpt
          image {
            url
          }
          published
        }
      }
    `);

    return {
      props: {
        projects,
        posts,
      },
    };
  }
</script>

<script lang="ts">
  import WorkCard from "$lib/components/work-card.svelte";
  import ContactForm from "$lib/components/contact-form.svelte";
  import type { Post, Project } from "$lib/types";

  export let projects: Project[];
  export let posts: Post[];

  const socialLinks = [
    {
      name: "github",
      title: "View my code on GitHub",
      href: "https://github.com/andreasremdt",
    },
    {
      name: "linkedin",
      title: "View my resúmé on LinkedIn",
      href: "https://linkedin.com/in/andreasremdt",
    },
    {
      name: "toptal",
      title: "Hire me on Toptal",
      href: "https://www.toptal.com/resume/andreas-remdt",
    },
    {
      name: "medium",
      title: "Read my publications on Medium",
      href: "https://medium.com/@andreas.remdt",
    },
    {
      name: "500px",
      title: "View my photos on 500px",
      href: "https://500px.com/andreasremdt",
    },
    {
      name: "codepen",
      title: "View my experiments on Codepen",
      href: "https://codepen.io/andreasremdt",
    },
  ];
</script>

<svelte:head>
  <title>Welcome to the home of Andreas Remdt</title>
</svelte:head>

<section class="py-24 flex items-center gap-x-16 max-w-6xl mx-auto px-4">
  <figure>
    <img src="/images/profile-image.jpg" alt="" width="350" class="rounded-lg shadow-lg" />
  </figure>
  <div>
    <h1 class="font-serif text-6xl font-bold text-gray-800 mb-4">Hey, I'm Andreas.</h1>
    <p class="text-xl mb-4 max-w-4xl">
      Software Engineer based in Germany who loves to build fast, accessible, and good-looking web
      applications using cutting-edge technologies.
    </p>

    <a
      href="https://www.toptal.com/resume/andreas-remdt"
      class="btn btn-primary"
      target="_blank"
      rel="nofollow noreferrer noopener">Hire me</a
    >
    <a href="/contact" class="btn btn-secondary">Get in touch</a>

    <ul class="flex gap-x-3 mt-16">
      {#each socialLinks as socialLink}
        <li>
          <a
            href={socialLink.href}
            class="text-gray-800 hover:text-emerald-400 focus:text-emerald-400 focus:outline-none transition-colors"
            target="_blank"
            rel="nofollow noreferrer noopener"
            aria-label={socialLink.title}
            ><svg width="24" height="24" aria-hidden="true"
              ><use href={`/symbol-defs.svg#${socialLink.name}`} /></svg
            ></a
          >
        </li>{/each}
    </ul>
  </div>
</section>

<main class="py-24 max-w-6xl mx-auto px-4">
  <h2 class="font-serif text-4xl font-bold text-gray-800 mb-12 text-center">Biography</h2>

  <div class="columns-3">
    <p class="mb-3">
      Andreas is a Freelance Software Engineer at <a
        href="https://www.toptal.com/resume/andreas-remdt"
        class="link">Toptal</a
      >, where he works for clients like
      <a href="https://databricks.com" class="link">Databricks</a>
      to deliver outstanding web applications.
    </p>

    <p class="mb-3">
      He started his career in 2011 and developed an ever-growing interest in the web platform and
      in building websites. Being self-taught, he previously worked for <a
        href="https://vitra.com"
        class="link">Vitra</a
      >, the
      <a href="https://ambiente.gob.do" class="link">Dominican Ministry of Environment</a>, and
      <a href="https://camunda.com" class="link">Camunda</a>.
    </p>

    <p class="mb-3">
      His main area of expertise lies within the front end; taming React state, making CSS look
      pixel-perfect in all browsers, squooshing JSON API data into beautiful UIs, ensuring
      accessibility, and all that other stuff. However, he is also at home in the back end, as long
      as it's in JavaScript.
    </p>

    <p class="mb-2">
      If outside of the matrix, he loves being in nature, <a
        href="https://500px.com/andreasremdt  "
        class="link">taking photos</a
      > of beautiful locations all around the world. Oh, and he's an okay cook.
    </p>
  </div>
</main>

<section class="py-24 bg-gray-50 relative">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="font-serif text-4xl font-bold text-gray-800 mb-2 text-center">Featured Work</h2>
    <div class="text-center mb-12">
      <a href="/projects" class="btn btn-primary">View all projects</a>
    </div>

    {#each projects as project}
      <WorkCard
        title={project.title}
        tags={project.tags}
        publicUrl={project.publicUrl}
        slug={project.slug}
        imageUrl={project.image.url}
      >
        {project.excerpt}
      </WorkCard>
    {/each}
  </div>
</section>

<section class="max-w-6xl mx-auto px-4 py-24">
  <h2 class="font-serif text-4xl font-bold text-gray-800 mb-2 text-center">Latest Blog Posts</h2>
  <div class="text-center mb-12">
    <a href="/blog" class="btn btn-primary">View all blog posts</a>
  </div>

  <div class="flex gap-x-8">
    {#each posts as post}
      <article class="flex flex-col w-1/3 items-start">
        <img
          src={post.image.url}
          alt={post.title}
          class="rounded-md shadow-lg mb-4 h-56 w-full object-cover"
        />
        <h3 class="font-serif text-2xl font-bold text-gray-800 mb-1">{post.title}</h3>
        <time
          datetime={post.published}
          class="border border-gray-200 rounded text-xs tracking-wider px-2 py-1 bg-white uppercase font-semibold text-gray-500"
          >{post.published}</time
        >
        <p class="my-6 flex-1">{post.excerpt}</p>
        <a href={`/blog/${post.slug}`} class="btn btn-secondary">Read more</a>
      </article>
    {/each}
  </div>
</section>

<section class="max-w-6xl mx-auto px-4 py-24">
  <h2 class="font-serif text-4xl font-bold text-gray-800 mb-2 text-center">Get in Touch</h2>
  <p class="text-center mb-12">
    Want to get in touch with me? Sweet! Just fill out the form and I'll get back to you as soon as
    possible.
  </p>

  <ContactForm />
</section>
