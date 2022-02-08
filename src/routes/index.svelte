<script lang="ts">
  import WorkCard from "$lib/work-card.svelte";
  import ContactForm from "$lib/contact-form.svelte";
</script>

<svelte:head>
  <title>Welcome to the home of Andreas Remdt</title>
</svelte:head>

<section class="py-24 flex items-center gap-x-16 max-w-6xl mx-auto px-4">
  <figure>
    <img src="/images/profile-image.jpg" alt="" width="350" class="rounded-lg shadow-lg" />
  </figure>
  <div>
    <h1 class="font-serif text-6xl font-bold text-gray-800 mb-4">Hey, I'm Andreas.</h1>
    <p class="text-xl mb-4 max-w-4xl">
      Software Engineer based in Germany who loves to build fast, accessible, and good-looking web
      applications using cutting-edge technologies.
    </p>
    <a href="/contact" class="btn btn-primary">Get in touch</a>
  </div>
</section>

<main class="py-24 max-w-6xl mx-auto px-4">
  <h2 class="font-serif text-4xl font-bold text-gray-800 mb-12 text-center">Biography</h2>

  <div class="columns-3">
    <p class="mb-3">
      Andreas is a Freelance Software Engineer at <a
        href="https://www.toptal.com/resume/andreas-remdt"
        class="link">Toptal</a
      >, where he works for clients like
      <a href="https://databricks.com" class="link">Databricks</a>
      to deliver outstanding web applications.
    </p>

    <p class="mb-3">
      He started his career in 2011 and developed an ever-growing interest in the web platform and
      in building websites. Being self-taught, he previously worked for <a
        href="https://vitra.com"
        class="link">Vitra</a
      >, the
      <a href="https://ambiente.gob.do" class="link">Dominican Ministry of Environment</a>, and
      <a href="https://camunda.com" class="link">Camunda</a>.
    </p>

    <p class="mb-3">
      His main area of expertise lies within the front end; taming React state, making CSS look
      pixel-perfect in all browsers, squooshing JSON API data into beautiful UIs, ensuring
      accessibility, and all that other stuff. However, he is also at home in the back end, as long
      as it's in JavaScript.
    </p>

    <p class="mb-2">
      If outside of the matrix, he loves being in nature, <a
        href="https://500px.com/andreasremdt  "
        class="link">taking photos</a
      > of beautiful locations all around the world. Oh, and he's an okay cook.
    </p>
  </div>
</main>

<section class="py-24 bg-gray-50 relative">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="font-serif text-4xl font-bold text-gray-800 mb-12 text-center">Featured Work</h2>

    <WorkCard
      title="Cawemo"
      tags={["React", "Main work"]}
      excerpt="An easy-to-use BPMN process modeling platform in the cloud, which helps businesses transform
        their processes for the digital era."
      url="https://cawemo.com"
    />

    <WorkCard
      title="Cawemo"
      tags={["React", "Main work"]}
      excerpt="An easy-to-use BPMN process modeling platform in the cloud, which helps businesses transform
        their processes for the digital era."
      url="https://cawemo.com"
    />

    <WorkCard
      title="Cawemo"
      tags={["React", "Main work"]}
      excerpt="An easy-to-use BPMN process modeling platform in the cloud, which helps businesses transform
        their processes for the digital era."
      url="https://cawemo.com"
    />
  </div>
</section>

<section class="max-w-6xl mx-auto px-4 py-24">
  <h2 class="font-serif text-4xl font-bold text-gray-800 mb-2 text-center">Get in Touch</h2>
  <p class="text-center mb-12">
    Want to get in touch with me? Sweet! Just fill out the form and I'll get back to you as soon as
    possible.
  </p>

  <ContactForm />
</section>
