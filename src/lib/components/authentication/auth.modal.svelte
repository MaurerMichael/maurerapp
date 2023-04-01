<script>
  import { Modal } from "flowbite-svelte";
  import Login from "./login.svelte";
  import Forget from "./forget.svelte";
  import Register from "./register.svelte";

  export let authModal = false;

  export let modalTyp = "login";

</script>

<Modal bind:open={authModal} size="xs" autoclose={false} class="w-full">
  {#if modalTyp === 'forget'}
    <Forget bind:modalTyp={modalTyp}></Forget>
  {:else if modalTyp === 'register'}
    <Register bind:modalTyp={modalTyp}></Register>
  {:else}
    <Login bind:modalTyp={modalTyp}></Login>
  {/if}
</Modal>
