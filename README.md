# svelte-ssr

This is an attempt to configure a Svelte app to use server-side rendering (SSR).
So far it is a failed attempt.

Here are the steps I have taken:

1. `npx degit sveltejs/template svelte-ssr`
1. `cd svelte-ssr`
1. `npm install`
1. Edit `rollup.config.js` and add `generate: ssr`
   to the object passed to the `svelte` plugin.
1. `npm install express`
1. Create `src/server.js`.
1. Add the npm script `serve": "node src/server.js",`
   to `package.json`.
1. `npm run build` to produce `public/bundle.js` and `public/bundle.css`.
1. `npm run serve`.
1. Browse localhost:1919
1. Cry because it doesn't work.
