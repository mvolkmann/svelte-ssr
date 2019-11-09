# svelte-ssr

This is an attempt to configure a Svelte app to use server-side rendering (SSR).
So far it is a failed attempt.

Here are the steps I have taken:

1. `npx degit sveltejs/template svelte-ssr`
1. `cd svelte-ssr`
1. `npm install`
1. Edit `src/main.js`.
   - add `hydrate:true` to the object passed to `new App()`
1. Edit `rollup.config.js`.
   - change `input` from `src/main.js` to `src/server.js`
   - change `output.format` from `'iffe'` to `'cjs'`
   - add `generate: ssr` and `hydratable: true`
     to the object passed to the `svelte` plugin
1. `npm install express`
1. Create `src/server.js` (see this file for details)
1. Add the npm script `serve": "node public/bundle.js",`
   to `package.json`.
1. `npm run build` to produce `public/bundle.js` and `public/bundle.css`.
1. `npm run serve`.
1. Browse localhost:1919
