# svelte-ssr

This implements server-side rendering (SSR) in a Svelte application.

To run the app locally without SSR:

- enter `npm run dev`
- browse localhost:5000.

To run the app with SSR:

- enter `npm install`
- enter `npm run build:ssr`
- enter `npm run serve`
- browse localhost:1919

The primary files to examine are
`src/App.svelte`, `src/server.js`, and `rollup.ssr-config.js`.
