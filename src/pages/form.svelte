<script>
  let text = 1;

  let a = [];
  let b = 1;

  const handleClick = () => (text += 1);
</script>

<div class="space-y-4">
  <div>{text}</div>
  <input bind:value="{text}" type="text" class="border border-black px-3 py-1" />
  <button on:click="{handleClick}" class="border border-black py-1 px-3">+1</button>
  <div class="flex flex-col">
    <label>
      <input type="checkbox" bind:group="{a}" value="{1}" />
      <span>Lorem, ipsum, dolor. 1</span>
    </label>
    <label>
      <input type="checkbox" bind:group="{a}" value="{2}" />
      <span>Lorem, ipsum, dolor. 2</span>
    </label>
    <label>
      <input type="checkbox" bind:group="{a}" value="{3}" />
      <span>Lorem, ipsum, dolor. 3</span>
    </label>
    <div>{a}</div>
  </div>
  <div class="flex flex-col">
    <label>
      <input type="radio" bind:group="{b}" value="{1}" />
      <span>Lorem, ipsum, dolor. 1</span>
    </label>
    <label>
      <input type="radio" bind:group="{b}" value="{2}" />
      <span>Lorem, ipsum, dolor. 2</span>
    </label>
    <label>
      <input type="radio" bind:group="{b}" value="{3}" />
      <span>Lorem, ipsum, dolor. 3</span>
    </label>
    <div>{b}</div>
  </div>
</div>

<div class="mt-10">
  <div>svelte:self 组件自调用</div>
  <div>svelte:component 动态组件</div>
  <div>svelte:window 绑定/插入到window</div>
  <div>svelte:body 绑定/插入到document.body</div>
  <div>svelte:head 绑定/插入到head</div>
</div>
