<script lang="ts">
  let name = "";

  // Will show the data then make a request to the database with the name  
  async function showAndSubmit(event: Event) {

    // get info from within the form
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    // assign name the value from the input 
    const { userName } = Object.fromEntries(formData);
    name = userName as string;
    // reset the form
    form.reset();
    // Make a request to the cloud functions to store it within the database
    // const { ok } = await fetch("api-url", {
    //   method: "POST",
    //   body: JSON.stringify({ name }),
    // });
    // if (ok) {
    //   console.log("Successfully Added Name!");
    // } else {
    //   console.log("Unsuccessfully Added Name!");
    // }
  }
</script>

<form on:submit|preventDefault={showAndSubmit}>
  <input name="userName" type="text" placeholder="Enter in your name!" />
  <button type="submit">Submit</button>
</form>

{#if name !== ""}
  <h1>Hello {name}</h1>
{/if}

<style>
  form {
    text-align: center;
  }

  h1 {
    text-align: center;
  }
</style>
