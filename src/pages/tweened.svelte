<script>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import { fade, fly } from 'svelte/transition';

  const progress = tweened(0, {
    duration: 400,
    easing: cubicOut
  });

  let visible = false;
</script>

<div class="space-y-4">
  <div>{$progress}</div>
  <button on:click="{() => progress.set(0)}">0%</button>
  <button on:click="{() => progress.set(100)}">100%</button>
</div>

<div class="space-y-4 mt-10">
  <button on:click="{() => visible = !visible}">transition</button>
  <div class="flex space-x-4">
    {#if visible}
    <div class="border border-black bg-blue-100 h-32 w-32 flex justify-center items-center" transition:fly="{{ y: 200, duration: 1000 }}">fly</div>
    {/if}
    <!--  -->
    {#if visible}
    <div class="border border-black bg-blue-100 h-32 w-32 flex justify-center items-center" transition:fade>fade</div>
    {/if}
    <!--  -->
    {#if visible}
    <div class="border border-black bg-blue-100 h-32 w-32 flex justify-center items-center" in:fly="{{ y: 200, duration: 1000 }}" out:fade>
      fade+fly
    </div>
    {/if}
  </div>
</div>
