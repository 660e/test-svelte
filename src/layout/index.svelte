<script>
  import { link } from 'svelte-spa-router';
</script>

<div class="font-mono h-screen overflow-hidden flex">
  <aside class="bg-black text-white text-right w-48 p-4 flex flex-col space-y-3">
    <a href="/" use:link>Home</a>
    <a href="/form" use:link>Form</a>
    <a href="/lifecycle" use:link>Lifecycle</a>
    <a href="/stores" use:link>Stores</a>
    <a href="/tweened" use:link>Tweened</a>
  </aside>
  <div class="flex-1 p-4">
    <slot />
  </div>
</div>
