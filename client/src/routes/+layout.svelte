<script>
  import { page } from "$app/stores";

  //   Routes and their text
  const routes = [
    { path: "/", text: "Home" },
    { path: "/hello", text: "Input Your Name" },
    { path: "/nameList", text: "Display Names" },
  ];
</script>

<div class="links">
  <!-- Loop through each route -->
  <!-- If the current route equals itself then don't display its link -->
  {#each routes as route, index (index)}
    {#if $page.url.pathname !== route.path}
      <a href={route.path}>{route.text}</a>
    {/if}
  {/each}
</div>
<slot />

<style>
  .links {
    width: 50%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    text-align: center;
  }
  .links a {
    font-size: 1.2em;
  }
</style>
