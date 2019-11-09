import App from './App.svelte';

const app = new App({
  // "The hydrate option instructs Svelte to upgrade
  // existing DOM (usually from server-side rendering)
  // rather than creating new elements."
  hydrate: true,
  target: document.body,
  props: {name: 'world'}
});

export default app;
