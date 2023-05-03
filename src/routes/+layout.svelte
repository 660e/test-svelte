<script>
  import '../app.css';
</script>

<div class="font-mono h-screen overflow-hidden flex">
  <div class="bg-black text-white text-right w-48 p-5 flex flex-col">
    <a href="/">home</a>
    <a href="/about">about</a>
  </div>
  <div class="flex-1 p-5">
    <slot />
  </div>
</div>
