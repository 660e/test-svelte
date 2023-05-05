<script>
  import { count, test } from '../stores';
  import ChildComponent from './child-component.svelte';

  let count_value;

  function reset() {
    count.set(0);
  }

  count.subscribe(value => {
    count_value = value;
  });
</script>

<div class="space-y-4">
  <div>{count_value}</div>
  <div>{$count}</div>
  <button on:click="{reset}">reset</button>
  <ChildComponent />
  <div>{$test}</div>
  <button on:click="{test.increment}">+1</button>
  <button on:click="{() => $count -= 1}">-1</button>
</div>
