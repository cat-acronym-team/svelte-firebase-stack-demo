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
  <input bind:value={name} name="userName" type="text" placeholder="Enter in your name!" />
  <button type="submit">Submit</button>
</form>

{#if final !== ""}
  <h1>Hello {final}</h1>
{/if}

<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />

<style rel="stylesheet" href="../styles.css"></style>
