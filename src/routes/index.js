import About from '../pages/about.svelte';
import Form from '../pages/form.svelte';
import Home from '../pages/home.svelte';

const routes = {
  '/': Home,
  '/form': Form,
  '/about': About
};

export default routes;
