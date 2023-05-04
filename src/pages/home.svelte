<script>
  import ChildComponent from './child-component.svelte';

  let count = 1;

  let cats = [
    { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
    { id: 'z_AbfPXTKms', name: 'Maru' },
    { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
  ];

  let promise = getRandomUser();

  async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api/');
    const text = await res.text();

    if (res.ok) {
      return JSON.parse(text).results[0].email;
    } else {
      throw new Error(text);
    }
  }

  const handleClick = () => {
    count += 1;
    promise = getRandomUser();
  };
</script>

<div class="space-y-4">
  <div class="flex items-center space-x-4">
    <div>{count}</div>
    <button on:click="{handleClick}" class="border border-black py-1 px-3">+1</button>
  </div>

  {#if count < 10}
  <div>count &lt; 10</div>
  {:else if count > 10}
  <div>count &gt; 10</div>
  {:else}
  <div>count = 10</div>
  {/if}

  <ul>
    {#each cats as { id, name }, i}
    <li :key="i">{id}: {name}</li>
    {/each}
  </ul>

  {#await promise}
  <div>loading...</div>
  {:then response}
  <pre>{response}</pre>
  {:catch error}
  <div>{error.message}</div>
  {/await}

  <ChildComponent message="{count}" />
  <ChildComponent />
</div>
