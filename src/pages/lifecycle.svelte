<script>
  import { beforeUpdate, afterUpdate, onDestroy, onMount } from 'svelte';

  let a = 0;

  const src = '/src/assets/svelte.svg';

  function handleClick() {
    a += 1;
  }

  beforeUpdate(() => console.log('beforeUpdate'));
  onMount(() => console.log('onMount'));
  afterUpdate(() => console.log('afterUpdate'));
  onDestroy(() => console.log('onDestroy'));
</script>

<div class="h-full flex flex-col justify-center items-center space-y-4">
  <img class="w-24" {src} alt />
  <button on:click="{handleClick}" class="border border-black py-1 px-3">+1</button>
  <div>{a}</div>
</div>
