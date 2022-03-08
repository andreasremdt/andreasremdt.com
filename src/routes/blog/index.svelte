<script context="module" lang="ts">
  import { getGraphCMS } from "$lib/utils";

  export async function load() {
    const data = await getGraphCMS().request(`
      {
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
        meta: page(where: {slug: "blog"}) {
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
  import PageHeader from "$lib/components/page-header.svelte";
  import type { Post, PageMeta } from "$lib/types";
  import LazyImage from "$lib/components/lazy-image.svelte";

  export let posts: Post[];
  export let meta: PageMeta;
</script>

<main>
  <PageHeader title={meta.title} description={meta.description} />

  <div class="max-w-6xl mx-auto px-4 py-16 sm:py-24">
    {#each posts as post}
      <article class="flex flex-col sm:flex-row gap-x-8 mt-16 first-of-type:mt-0">
        <LazyImage
          image={post.image}
          alt={post.title}
          width={450}
          height={275}
          outerClassName="mb-4 sm:mb-0 sm:w-2/5 sm:flex-shrink-0"
          innerClassName="w-full object-cover rounded-md shadow-lg h-64"
        />
        <div>
          <h2 class="font-serif text-2xl font-bold text-gray-800 mb-1 leading-7">{post.title}</h2>
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
