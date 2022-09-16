<script lang="ts">
  import { getUsers } from "./firebaseFunctions";

  //Names from User collection
  let names: string[] = [];
  getUsers().then((members) => {
    names = members;
  });
</script>

<h1>List of names submitted</h1>
<ul>
  {#each names as name}
    <li>{name}</li>
  {/each}
</ul>

<style>
  h1 {
    text-align: center;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: grid;
    place-items: center;
    gap: 4px;
  }
</style>
