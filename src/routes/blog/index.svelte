<script context="module" lang="ts">
  import { GraphQLClient } from "graphql-request";

  export async function load() {
    const graphcms = new GraphQLClient(
      "https://api-eu-central-1.graphcms.com/v2/ckzekldqw3bp001z1fxyv2ohm/master",
      {
        headers: {},
      }
    );

    const { posts } = await graphcms.request(`
      {
        posts(orderBy: published_DESC) {
          title
          slug
          excerpt
          image {
            url(transformation: {image: {resize: {width: 500}}})
          }
          published
        }
      }
    `);

    return {
      props: {
        posts,
      },
    };
  }
</script>

<script lang="ts">
  import PageHeader from "$lib/components/page-header.svelte";
  import type { Post } from "$lib/types";

  export let posts: Post[];
</script>

<main>
  <PageHeader
    title="Blog"
    description="Technical articles I published, covering web development topics."
  />

  <div class="max-w-6xl mx-auto px-4 py-24">
    {#each posts as post}
      <article class="flex items-center gap-x-8 mt-16 first-of-type:mt-0">
        <img
          src={post.image.url}
          alt={post.title}
          class="w-2/5 flex-shrink-0 rounded-md shadow-lg h-[275px] object-cover"
          width="450"
          height="275"
        />
        <div>
          <h2 class="font-serif text-2xl font-bold text-gray-800 mb-1">{post.title}</h2>
          <time
            datetime={post.published}
            class="border border-gray-200 rounded text-xs tracking-wider px-2 py-1 bg-white uppercase font-semibold text-gray-500"
            >{post.published}</time
          >
          <p class="my-6">{post.excerpt}</p>
          <div>
            <a href={`/blog/${post.slug}`} class="btn btn-primary" sveltekit:prefetch>Read more</a>
          </div>
        </div>
      </article>
    {/each}
  </div>
</main>
