<script lang="ts">
  import { getUsers } from "./firebaseFunctions";

  //Names from User collection
  let names: string[] = [];
  getUsers().then((members) => {
    names = members;
  });
</script>

<form>
  <h1><u>List of names submitted </u></h1>
  <ul>
    {#each names as name}
      <li>{name}</li>
    {/each}
  </ul>
</form>

<style ref="stylesheet" href="../styles.css"></style>
