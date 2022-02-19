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
            url(transformation: {image: {resize: {width: 500}}})
          }
          publicUrl
          slug
          tags
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
  import PageHeader from "$lib/components/page-header.svelte";
  import type { Project } from "$lib/types";

  export let projects: Project[];
</script>

<main>
  <PageHeader
    title="Work & Projects"
    description="Libraries, apps, and websites I have built so far or participated in."
  />

  <div class="max-w-6xl mx-auto px-4 py-24">
    {#each projects as project}
      <article class="flex items-center gap-x-8 mt-16 first-of-type:mt-0">
        <img
          src={project.image.url}
          alt={project.title}
          class="w-2/5 flex-shrink-0 shadow-lg h-[275px] object-cover"
          width="450"
          height="275"
        />
        <div>
          <h2 class="font-serif text-2xl font-bold text-gray-800 mb-1">{project.title}</h2>
          <div class="flex gap-x-1">
            {#each project.tags as tag}
              <span
                class="border border-gray-200 rounded text-xs tracking-wider px-2 py-1 bg-white uppercase font-semibold text-gray-500"
                >{tag}</span
              >
            {/each}
          </div>
          <p class="my-6">{project.excerpt}</p>
          <div>
            <a href={`/projects/${project.slug}`} class="btn btn-primary">Details</a>
            {#if project.publicUrl}
              <a
                href={project.publicUrl}
                class="btn btn-secondary"
                target="_blank"
                rel="noopener nofollow noreferrer"
                >Visit website <svg
                  aria-hidden="true"
                  viewBox="0 0 32 32"
                  width="16"
                  height="16"
                  class="ml-2"
                >
                  <path
                    fill="currentColor"
                    d="M6 2v24h24v-24h-24zM28 24h-20v-20h20v20zM4 28v-21l-2-2v25h25l-2-2h-21z"
                  />
                  <path fill="currentColor" d="M11 8l5 5-6 6 3 3 6-6 5 5v-13z" />
                </svg></a
              >
            {/if}
          </div>
        </div>
      </article>
    {/each}
  </div>
</main>
