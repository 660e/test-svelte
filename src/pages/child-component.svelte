<script>
  import { createEventDispatcher } from 'svelte';
  export let message = 0;

  const dispatch = createEventDispatcher();

  function handleEmit() {
    dispatch('confirm', 'emit');
  }
</script>

<div class="border border-black p-4">
  <div>child-component: {message}</div>
  {#if message === 0}
  <button on:click="{handleEmit}">emit</button>
  {/if}
</div>
