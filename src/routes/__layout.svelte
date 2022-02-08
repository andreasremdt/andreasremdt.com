<script lang="ts">
  import Header from "$lib/header.svelte";
  import Footer from "$lib/footer.svelte";
  import "../styles/global.css";
</script>

<Header />
<slot />
<Footer />
