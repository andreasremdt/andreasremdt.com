<script context="module" lang="ts">
  import { getGraphCMS } from "$lib/utils";

  export async function load({ params }) {
    const data = await getGraphCMS().request(
      `
      query GetPostBySlug($slug: String!) {
        post(where: {slug: $slug}) {
          content {
            html
          }
          published
          title
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
    `,
      { slug: params.slug }
    );

    return {
      props: data,
    };
  }
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import hljs from "highlight.js";
  import LazyImage from "$lib/components/lazy-image.svelte";
  import PageHeader from "$lib/components/page-header.svelte";
  import type { Post } from "$lib/types";

  export let post: Post;

  onMount(() => {
    hljs.highlightAll();
  });
</script>

<main>
  <PageHeader title={post.title} description={`Published on ${post.published}`} />

  <div class="max-w-6xl mx-auto px-4 pt-12 pb-24">
    <LazyImage
      image={post.image}
      alt={post.title}
      width={1120}
      height={695}
      innerClassName="shadow-lg mb-12 rounded-md"
    />

    <div class="prose prose-sm sm:prose-base mx-auto">
      {@html post.content.html}
    </div>

    {#if post.externalUrl}
      <div class="text-center mt-8">
        <a
          href={post.externalUrl}
          class="btn btn-primary"
          target="_blank"
          rel="noopener nofollow noreferrer"
          >Read the complete article on CSS-Tricks <svg
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
      </div>
    {/if}
  </div>
</main>
