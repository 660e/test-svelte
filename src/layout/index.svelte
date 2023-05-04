<script>
  import { link } from 'svelte-spa-router';
</script>

<div class="font-mono h-screen overflow-hidden flex">
  <aside class="bg-black text-white text-right w-48 p-4 flex flex-col space-y-3">
    <a href="/" use:link>Home</a>
    <a href="/form" use:link>Form</a>
    <a href="/about" use:link>About</a>
  </aside>
  <div class="flex-1 p-4">
    <slot />
  </div>
</div>
