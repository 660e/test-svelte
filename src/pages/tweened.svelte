<script>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  const progress = tweened(0, {
    duration: 400,
    easing: cubicOut
  });
</script>

<div>{$progress}</div>
<button on:click="{() => progress.set(0)}">0%</button>
<button on:click="{() => progress.set(100)}">100%</button>
