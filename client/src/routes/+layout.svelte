<script lang="ts">
  import { page } from "$app/stores";

  //   Routes and their text
  const routes = [
    { path: "/", text: "Home" },
    { path: "/hello", text: "Input Your Name" },
    { path: "/nameList", text: "Display Names" },
  ] as const;
</script>

<svelte:head>
  <title>Demo</title>
</svelte:head>

<nav>
  <!-- Loop through each route -->
  <!-- If the current route equals itself then don't display its link -->
  {#each routes as route, index (index)}
    {#if $page.url.pathname !== route.path}
      <a href={route.path}>{route.text}</a>
    {/if}
  {/each}
</nav>
<main>
  <slot />
</main>

<style>
  :global(:root) {
    color-scheme: dark light;
  }

  :global(*) {
    font-family: "Roboto";
  }

  :global(body) {
    margin: 0;
  }

  nav {
    display: flex;
    justify-content: space-evenly;
    padding: 12px;
  }

  nav a {
    font-size: 1.2em;
  }

  main {
    max-width: 800px;
    margin: 0 auto;
    padding: 12px;
  }
</style>
