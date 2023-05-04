<script>
  import Router from 'svelte-spa-router';
  import Layout from './layout/index.svelte';

  import routes from './routes';
</script>

<Layout>
  <Router {routes} />
</Layout>
