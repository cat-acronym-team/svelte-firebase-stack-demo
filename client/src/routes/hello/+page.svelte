<script lang="ts">
  import { addUser } from "../nameList/firebaseFunctions";

  let name = "";
  let final = "";
  // Will show the data then make a request to the database with the name
  async function showAndSubmit(event: Event) {
    if (name === "") {
      return;
    }
    // Assign the display var to name
    final = name;
    name = "";
    addUser(final);
  }
</script>

<form on:submit|preventDefault={showAndSubmit}>
  <label for="userName">Enter your name!</label>
  <input bind:value={name} id="userName" type="text" />
  <button type="submit">Submit</button>
</form>

{#if final !== ""}
  <output>Hello {final}</output>
{/if}

<style rel="stylesheet" href="../styles.css"></style>
