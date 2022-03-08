<script lang="ts">
  import type { Project } from "$lib/types";
  import LazyImage from "./lazy-image.svelte";

  export let project: Project;
</script>

<article
  class="bg-white rounded-lg shadow-xl shadow-gray-200 mt-16 p-4 md:p-8 md:h-[450px] flex flex-col justify-center top-[108px] items-start sticky overflow-hidden"
>
  <h3 class="font-serif text-xl md:text-2xl font-bold text-gray-800 mb-1">{project.title}</h3>
  <div class="flex gap-1 flex-wrap">
    {#each project.tags as tag}
      <span
        class="border border-gray-200 rounded text-xs tracking-wider px-2 py-1 bg-white uppercase font-semibold text-gray-500"
        >{tag}</span
      >
    {/each}
  </div>

  <p class="max-w-lg my-6">
    {project.excerpt}
  </p>

  <div>
    <a href={`/projects/${project.slug}`} class="btn btn-primary" sveltekit:prefetch>Details</a>
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

  <LazyImage
    image={project.image}
    width={700}
    height={700}
    alt={project.title}
    outerClassName="mb-4 -order-1 md:order-1 md:absolute md:w-2/5 lg:w-3/6 md:-right-4 md:-bottom-4 shadow-xl"
  />
</article>
