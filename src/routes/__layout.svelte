<script lang="ts">
  import Header from "$lib/components/header.svelte";
  import Footer from "$lib/components/footer.svelte";
  import "$lib/styles/global.css";
</script>

<Header />
<slot />
<Footer />
