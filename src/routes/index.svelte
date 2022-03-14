<script context="module" lang="ts">
  import { getGraphCMS } from "$lib/utils";

  export async function load() {
    const data = await getGraphCMS().request(`
      {
        projects(where: {featured: true}) {
          excerpt
          title
          image {
            webp: url(
              transformation: {image: {resize: {width: 700, fit: max}}, document: {output: {format: webp}}}
            )
            jpg: url(
              transformation: {image: {resize: {width: 700, fit: max}}}
            )
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
            webp: url(
              transformation: {image: {resize: {width: 750, fit: max}}, document: {output: {format: webp}}}
            )
            jpg: url(
              transformation: {image: {resize: {width: 750, fit: max}}}
            )
          }
          published
        }
        technologies {
          name
        }
        portrait: asset(where: {id: "cl0i713joxpv60ez8x71adamx"}) {
          webp: url(
            transformation: {image: {resize: {width: 350, height: 350, fit: clip}}, document: {output: {format: webp}}}
          )
          jpg: url(
            transformation: {image: {resize: {width: 350, height: 350, fit: clip}}}
          )
        }
        socialLinks {
          name
          title
          url
        }
        meta: page(where: {slug: "index"}) {
          title
          description
        }
      }
    `);

    return {
      props: data,
    };
  }
</script>

<script lang="ts">
  import WorkCard from "$lib/components/work-card.svelte";
  import ContactForm from "$lib/components/contact-form.svelte";
  import LazyImage from "$lib/components/lazy-image.svelte";
  import type { Post, Project, Technology, Image, SocialLink, PageMeta } from "$lib/types";
  import { slugify } from "$lib/utils";

  export let projects: Project[];
  export let posts: Post[];
  export let technologies: Technology[];
  export let portrait: Image;
  export let socialLinks: SocialLink[];
  export let meta: PageMeta;
</script>

<svelte:head>
  <title>{meta.title} | Andreas Remdt</title>
  <meta name="description" content={meta.description} />
</svelte:head>

<section class="py-16 sm:py-24 sm:flex sm:gap-x-8 lg:gap-x-16 max-w-6xl mx-auto px-4">
  <figure class="sm:w-1/3">
    <LazyImage
      image={portrait}
      width={350}
      height={350}
      innerClassName="rounded-lg shadow-lg w-1/3 sm:w-full aspect-square mb-8 sm:mb-0"
      lazy={false}
    />
  </figure>
  <div>
    <h1 class="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-800 mb-4">
      Hey, I'm Andreas.
    </h1>
    <p class="md:text-xl mb-4 max-w-4xl">
      {meta.description}
    </p>

    <a
      href="https://www.toptal.com/resume/andreas-remdt"
      class="btn btn-primary"
      target="_blank"
      rel="nofollow noreferrer noopener">Hire me</a
    >
    <a href="/contact" class="btn btn-secondary" sveltekit:prefetch>Get in touch</a>

    <ul class="flex gap-x-3 mt-8 sm:mt-16">
      {#each socialLinks as socialLink}
        <li>
          <a
            href={socialLink.url}
            class="text-gray-800 hover:text-emerald-400 focus-visible:text-emerald-400 focus-visible:outline-none transition-colors"
            target="_blank"
            rel="nofollow noreferrer noopener"
            title={socialLink.title}
            ><svg width="24" height="24" aria-hidden="true"
              ><use href={`/symbol-defs.svg#${slugify(socialLink.name)}`} /></svg
            ></a
          >
        </li>{/each}
    </ul>
  </div>
</section>

<main class="py-16 sm:py-24 max-w-6xl mx-auto px-4">
  <h2 class="font-serif text-2xl sm:text-4xl font-bold text-gray-800 mb-12 text-center">
    Biography
  </h2>

  <div class="sm:columns-2 md:columns-3">
    <p class="mb-3">
      Andreas is a Freelance Software Engineer at <a
        href="https://www.toptal.com/resume/andreas-remdt"
        class="link">Toptal</a
      >, where he works for various clients in different industries like
      <a href="https://databricks.com" class="link">Databricks</a> to deliver outstanding web applications.
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

<section class="py-16 sm:py-24 max-w-6xl mx-auto px-4">
  <h2 class="font-serif text-2xl sm:text-4xl font-bold text-gray-800 mb-12 text-center">
    Technologies & Tools
  </h2>

  <ul class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 rounded-lg">
    {#each technologies as technology}
      <li
        class="bg-white border border-gray-200 rounded-md shadow-sm h-32 flex items-center justify-center flex-col text-center leading-4"
      >
        <img
          aria-hidden="true"
          src={`/logos/${slugify(technology.name)}.svg`}
          alt={technology.name}
          width="40"
          height="40"
          class="h-8 mb-3"
        />
        {technology.name}
      </li>
    {/each}
  </ul>
</section>

<section class="py-16 sm:py-24 bg-gray-50 relative">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="font-serif text-2xl sm:text-4xl font-bold text-gray-800 mb-2 text-center">
      Featured Work
    </h2>
    <div class="text-center mb-12">
      <a href="/projects" class="btn btn-primary" sveltekit:prefetch>View all projects</a>
    </div>

    {#each projects as project}
      <WorkCard {project} />
    {/each}
  </div>
</section>

<section class="max-w-6xl mx-auto px-4 py-16 sm:py-24">
  <h2 class="font-serif text-2xl sm:text-4xl font-bold text-gray-800 mb-2 text-center">
    Latest Blog Posts
  </h2>
  <div class="text-center mb-12">
    <a href="/blog" class="btn btn-primary" sveltekit:prefetch>View all blog posts</a>
  </div>

  <div class="flex flex-col md:flex-row gap-8">
    {#each posts as post}
      <article class="flex flex-col md:w-1/3 items-start">
        <LazyImage
          image={post.image}
          alt={post.title}
          width={750}
          height={750}
          outerClassName="mb-4 w-full"
          innerClassName="rounded-md shadow-lg h-56 w-full object-cover"
        />
        <h3 class="font-serif text-xl md:text-2xl font-bold text-gray-800 mb-1">{post.title}</h3>
        <time
          datetime={post.published}
          class="border border-gray-200 rounded text-xs tracking-wider px-2 py-1 bg-white uppercase font-semibold text-gray-500"
          >{post.published}</time
        >
        <p class="my-6 flex-1">{post.excerpt}</p>
        <a href={`/blog/${post.slug}`} class="btn btn-secondary" sveltekit:prefetch>Read more</a>
      </article>
    {/each}
  </div>
</section>

<section class="max-w-6xl mx-auto px-4 py-16 sm:py-24">
  <h2 class="font-serif text-2xl sm:text-4xl font-bold text-gray-800 mb-2 text-center">
    Get in Touch
  </h2>
  <p class="text-center mb-12">
    Want to get in touch with me? Sweet! Just fill out the form and I'll get back to you as soon as
    possible.
  </p>

  <ContactForm />
</section>
