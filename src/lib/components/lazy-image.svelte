<script lang="ts">
  import type { Image } from "$lib/types";

  export let image: Image;
  export let alt: string = "";
  export let outerClassName: string = "";
  export let innerClassName: string = "";
  export let width: number;
  export let height: number;
</script>

<picture class={outerClassName}>
  <source srcset={image.webp} type="image/webp" />
  <img src={image.jpg} {alt} {width} {height} class={innerClassName} loading="lazy" />
</picture>
