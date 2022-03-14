<script context="module" lang="ts">
  import { getGraphCMS } from "$lib/utils";

  export async function load({ params }) {
    const data = await getGraphCMS().request(
      `
      query GetProjectsBySlug($slug:String!) {
        project(where: {slug: $slug}) {
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
    `,
      { slug: params.slug }
    );

    return {
      props: data,
    };
  }
</script>

<script lang="ts">
  import PageHeader from "$lib/components/page-header.svelte";
  import LazyImage from "$lib/components/lazy-image.svelte";
  import type { Project } from "$lib/types";

  export let project: Project;
</script>

<main>
  <PageHeader title={project.title} description={project.excerpt} />

  <div class="max-w-6xl mx-auto px-4 pt-12 pb-24">
    <LazyImage
      image={project.image}
      alt={project.title}
      width={1120}
      height={695}
      innerClassName="shadow-lg mb-12 rounded-md h-[695px] object-cover"
    />

    <section
      class="border-t border-b border-gray-200 flex flex-col gap-4 lg:flex-row lg:justify-between py-4 mb-12 items-center text-center lg:text-left"
    >
      <div>
        <h2 class="font-serif text-xl font-bold">Published</h2>
        <p>{project.publishedIn}</p>
      </div>
      <div>
        <h2 class="font-serif text-xl font-bold">Technologies</h2>
        <div class="flex gap-1 flex-wrap justify-center">
          {#each project.tags as tag}
            <span
              class="border border-gray-200 rounded text-xs tracking-wider px-2 py-1 bg-white uppercase font-semibold text-gray-500"
              >{tag}</span
            >
          {/each}
        </div>
      </div>
      <div class="flex gap-2 flex-wrap justify-center">
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
        {#if project.githubUrl}
          <a
            href={project.githubUrl}
            class="btn btn-secondary"
            target="_blank"
            rel="noopener nofollow noreferrer"
            >Visit source code <svg
              aria-hidden="true"
              viewBox="0 0 32 32"
              width="16"
              height="16"
              class="ml-2"
            >
              <path
                fill="currentColor"
                d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"
              />
            </svg></a
          >
        {/if}
      </div>
    </section>

    <div
      class="prose-sm sm:prose-base prose-headings:font-serif prose-headings:font-bold mx-auto prose-a:no-underline focus:prose-a:outline-none focus:prose-a:text-emerald-500 prose-a:text-gray-900 prose-a:border-b-2 prose-a:border-emerald-400 hover:prose-a:text-emerald-500 prose-a:transition-colors"
    >
      {@html project.description.html}
    </div>
  </div>
</main>
