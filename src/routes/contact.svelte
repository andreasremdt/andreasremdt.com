<script lang="ts">
  import PageHeader from "$lib/components/page-header.svelte";
  import ContactForm from "$lib/components/contact-form.svelte";
</script>

<main>
  <PageHeader
    title="Get in Touch"
    description="Want to get in touch with me? Sweet! Just fill out the form and I'll get back to you as soon as
    possible."
  />

  <div class="max-w-6xl mx-auto px-4 py-24">
    <ContactForm />
  </div>
</main>
