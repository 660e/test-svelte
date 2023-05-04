<script>
  let text = 1;
  const handleClick = () => (text += 1);
</script>

<div class="space-y-4">
  <div>{text}</div>
  <input bind:value="{text}" type="text" class="border border-black px-3 py-1" />
  <button on:click="{handleClick}" class="border border-black py-1 px-3">+1</button>
</div>
