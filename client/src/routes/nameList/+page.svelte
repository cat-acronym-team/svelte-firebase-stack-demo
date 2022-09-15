<script lang="ts">
  import { getUsers, names } from "./firebaseFunctions";
</script>

<form>
  <h1><u>List of names submitted </u></h1>
  <ul>
    {#each names as name}
      <li>{name}</li>
    {/each}
  </ul>
</form>

<style>
  form {
    text-align: center;
  }
</style>
