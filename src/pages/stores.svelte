<script>
  import { count } from '../stores';
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
  <button on:click="{reset}">reset</button>
  <ChildComponent />
</div>
