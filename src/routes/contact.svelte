<script context="module" lang="ts">
  import { getGraphCMS } from "$lib/utils";

  export async function load() {
    const data = await getGraphCMS().request(`
      {
        meta: page(where: {slug: "contact"}) {
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
  import type { PageMeta } from "$lib/types";
  import PageHeader from "$lib/components/page-header.svelte";
  import ContactForm from "$lib/components/contact-form.svelte";

  export let meta: PageMeta;
</script>

<main>
  <PageHeader title={meta.title} description={meta.description} />

  <div class="max-w-6xl mx-auto px-4 py-16 sm:py-24">
    <ContactForm />
  </div>
</main>
