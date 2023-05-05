import Form from '../pages/form.svelte';
import Home from '../pages/home.svelte';
import Lifecycle from '../pages/lifecycle.svelte';
import Stores from '../pages/stores.svelte';
import Tweened from '../pages/tweened.svelte';

const routes = {
  '/': Home,
  '/form': Form,
  '/lifecycle': Lifecycle,
  '/stores': Stores,
  '/tweened': Tweened
};

export default routes;
