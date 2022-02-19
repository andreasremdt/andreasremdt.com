<script context="module" lang="ts">
  import { GraphQLClient } from "graphql-request";

  export async function load({ params }) {
    const graphcms = new GraphQLClient(
      "https://api-eu-central-1.graphcms.com/v2/ckzekldqw3bp001z1fxyv2ohm/master",
      {
        headers: {},
      }
    );

    const { post } = await graphcms.request(
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
            url(transformation: {image: {resize: {width: 1120}}})
          }
        }
      }
    `,
      { slug: params.slug }
    );

    return {
      props: {
        post,
      },
    };
  }
</script>

<script lang="ts">
  import PageHeader from "$lib/components/page-header.svelte";
  import type { Post } from "$lib/types";

  export let post: Post;
</script>

<main>
  <PageHeader title={post.title} description={`Published on ${post.published}`} />

  <div class="max-w-6xl mx-auto px-4 pt-12 pb-24">
    <figure>
      <img
        src={post.image.url}
        alt={post.title}
        class="shadow-lg mb-12 rounded-md h-[695px] object-cover"
        width="1120"
        height="695"
      />
    </figure>

    <div
      class="prose prose-headings:font-serif prose-headings:font-bold mx-auto prose-a:no-underline focus:prose-a:outline-none focus:prose-a:text-emerald-500 prose-a:text-gray-900 prose-a:border-b-2 prose-a:border-emerald-400 hover:prose-a:text-emerald-500 prose-a:transition-colors"
    >
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
