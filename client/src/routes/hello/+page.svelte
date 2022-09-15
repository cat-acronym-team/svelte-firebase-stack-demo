<script lang="ts">
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
    // Make a request to the cloud functions to store it within the database
    // const { ok } = await fetch("api-url", {
    //   method: "POST",
    //   body: JSON.stringify({ name: final }),
    // });
    // if (ok) {
    //   console.log("Successfully Added Name!");
    // } else {
    //   console.log("Unsuccessfully Added Name!");
    // }
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
