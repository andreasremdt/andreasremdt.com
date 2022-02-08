<script lang="ts">
  export let title = "";
  export let tags = [];
  export let excerpt = "";
  export let url = "";
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
    {excerpt}
  </p>

  <div>
    <a href={url} class="btn btn-primary">Visit website</a>
    <a href={url} class="btn btn-secondary">Details</a>
  </div>

  <img
    src="/images/work/leo-club-weilamrhein.png"
    alt="Home page of the Leo Club Weil am Rhein"
    class="absolute w-3/5 -right-28 -bottom-20 shadow-xl"
  />
</article>
