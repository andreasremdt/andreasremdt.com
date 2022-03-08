<script context="module" lang="ts">
  import { GraphQLClient } from "graphql-request";

  export async function load() {
    const graphcms = new GraphQLClient(
      "https://api-eu-central-1.graphcms.com/v2/ckzekldqw3bp001z1fxyv2ohm/master",
      {
        headers: {},
      }
    );

    const { projects } = await graphcms.request(`
      {
        projects(orderBy: publishedIn_DESC) {
          excerpt
          title
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

    return {
      props: {
        projects,
      },
    };
  }
</script>

<script lang="ts">
  import LazyImage from "$lib/components/lazy-image.svelte";
  import PageHeader from "$lib/components/page-header.svelte";
  import type { Project } from "$lib/types";

  export let projects: Project[];
</script>

<main>
  <PageHeader
    title="Work & Projects"
    description="Libraries, apps, and websites I have built so far or participated in."
  />

  <div
    class="max-w-6xl mx-auto px-4 py-16 sm:py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
  >
    {#each projects as project}
      <article>
        <a
          href={`/projects/${project.slug}`}
          sveltekit:prefetch
          class="group block hover:scale-[1.03] focus:scale-[1.03] transition-transform duration-500"
        >
          <figure class="relative rounded-md shadow-lg overflow-hidden peer">
            <LazyImage
              image={project.image}
              alt={project.title}
              width={500}
              height={300}
              innerClassName="w-full"
            />
            <figcaption
              class="absolute inset-0 flex flex-col justify-center text-center bg-white/95 rounded-sm px-8 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500"
            >
              <h2 class="font-serif text-2xl font-bold text-gray-800 mb-3 leading-7">
                {project.title}
              </h2>
              <p class="text-sm">{project.excerpt}</p>
            </figcaption>
          </figure>
        </a>
      </article>
    {/each}
  </div>
</main>
