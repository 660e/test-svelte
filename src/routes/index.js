import Form from '../pages/form.svelte';
import Home from '../pages/home.svelte';
import Lifecycle from '../pages/lifecycle.svelte';

const routes = {
  '/': Home,
  '/form': Form,
  '/lifecycle': Lifecycle
};

export default routes;
