<script lang="ts">
  export let title: string = "";
  export let tags: string[] = [];
  export let publicUrl: string = "";
  export let slug: string = "";
  export let imageUrl: string = "";
</script>

<article
  class="bg-white rounded-lg shadow-xl shadow-gray-200 mt-16 p-8 h-[450px] flex flex-col justify-center items-start sticky top-9 overflow-hidden"
>
  <h3 class="font-serif text-2xl font-bold text-gray-800 mb-1">{title}</h3>
  <div class="flex gap-x-1">
    {#each tags as tag}
      <span
        class="border border-gray-200 rounded text-xs tracking-wider px-2 py-1 bg-white uppercase font-semibold text-gray-500"
        >{tag}</span
      >
    {/each}
  </div>

  <p class="max-w-lg my-6">
    <slot />
  </p>

  <div>
    <a href={`/projects/${slug}`} class="btn btn-primary">Details</a>
    {#if publicUrl}
      <a
        href={publicUrl}
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

  <img
    src={imageUrl}
    alt="Home page of the Leo Club Weil am Rhein"
    class="absolute w-3/6 -right-4 -bottom-4 shadow-xl"
  />
</article>
