<script lang="ts">
  let name = "";
  let final = "";
  // Will show the data then make a request to the database with the name
  async function showAndSubmit(event: Event) {
    const form = event.target as HTMLFormElement;
    if (name === "") {
      return;
    }
    // Assign the display var to name
    final = name;
    // reset the form
    form.reset();
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

<style>
  form {
    text-align: center;
  }

  h1 {
    text-align: center;
  }
</style>
