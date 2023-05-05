<script>
  import { createEventDispatcher } from 'svelte';
  import { count } from '../stores';

  export let message = 0;

  const dispatch = createEventDispatcher();

  function handleEmit() {
    count.update(n => n + 1);
    dispatch('confirm', 'emit');
  }
</script>

<div class="border border-black p-4">
  <div>child-component: {message}</div>
  {#if message === 0}
  <button on:click="{handleEmit}">emit +1</button>
  {/if}
</div>
