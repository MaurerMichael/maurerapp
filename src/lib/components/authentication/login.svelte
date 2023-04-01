<script>
  import { Button, Label, Input, Checkbox, InputAddon, Helper, ButtonGroup } from "flowbite-svelte";

  export let modalTyp;

  let emailError
  let passordError

</script>

<form class="flex flex-col space-y-6" action="#">
  <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Melde dich bei Spark an</h3>
  <div class="space-y-2">
    <Label for="error"  color="{emailError ? 'red': ''}" class="block mb-2">Email</Label>
    <ButtonGroup class="w-full" >
      <InputAddon>
        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
        </svg>
      </InputAddon>
      <Input type="email" name="email" color="{emailError ? 'red': ''}" placeholder="name@company.com" required />
    </ButtonGroup>
    {#if (emailError)}
    <Helper class="mt-2" color="red"><span class="font-medium">Fehler!</span> {emailError}</Helper>
      {/if}
  </div>
  <div class="space-y-2">
    <Label for="error" color="{passordError ? 'red': ''}" class="block mb-2">Your password</Label>
    <Input type="password" name="password" color="{passordError ? 'red' : ''}" placeholder="•••••" required />
    {#if (passordError)}
    <Helper class="mt-2" color="red"><span class="font-medium">Fehler!</span> {passordError}</Helper>
      {/if}
  </div>
  <div class="flex items-start">
    <Checkbox>Anmeldedaten speichern</Checkbox>
    <a on:click={()=>modalTyp='forget'} class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500 cursor-pointer">Passwort Vergessen?</a>
  </div>
  <Button type="submit" class="w-full1">Weiter</Button>
  <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
    Noch nicht Registriert? <a on:click={() => modalTyp = 'register'} class="text-blue-700 hover:underline dark:text-blue-500 cursor-pointer">Jetzt registrieren</a>
  </div>
</form>
