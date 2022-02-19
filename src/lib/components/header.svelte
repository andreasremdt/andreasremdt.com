<script lang="ts">
  import { page } from "$app/stores";

  const activeClassNames = "text-gray-900 border-b-2 border-emerald-400";
  const links = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/projects",
      title: "Work",
    },
    {
      href: "/blog",
      title: "Blog",
    },
    {
      href: "/contact",
      title: "Contact",
    },
  ];

  function isLinkActive(pathname: string, href: string) {
    if (pathname === "/" && href === "/") {
      return true;
    } else if (href !== "/") {
      return pathname.includes(href);
    }
  }
</script>

<header class="sticky top-0 bg-white z-10">
  <div class="h-24 flex items-center justify-between max-w-6xl mx-auto px-4">
    <a
      href="/"
      class="font-serif font-bold text-xl text-gray-800 hover:text-emerald-400 transition-colors"
      >Andreas Remdt</a
    >

    <nav class="flex gap-x-8">
      {#each links as link}
        <a
          href={link.href}
          sveltekit:prefetch
          class={`hover:text-emerald-400 transition-colors ${
            isLinkActive($page.url.pathname, link.href) ? activeClassNames : ""
          }`}>{link.title}</a
        >
      {/each}
    </nav>
  </div>
</header>
