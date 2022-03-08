<script lang="ts">
  export let title = "";
  export let description = "";
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<header class="text-center bg-gray-50 py-16">
  <div class="max-w-6xl mx-auto px-4">
    <h1 class="font-serif text-3xl sm:text-4xl font-bold text-gray-800 mb-2">{title}</h1>
    <p class="sm:text-lg">{description}</p>
  </div>
</header>
