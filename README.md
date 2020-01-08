# svelte-ssr

This is an attempt to implement server-side rendering (SSR)
in a Svelte application.

To build this, enter `npm install` and `npm run build:server`.
To start the server, enter `npm run serve`.
Browse localhost:1919.

Why doesn't the text after "Hello" change
when the value of the input is changed?
There is no reactivity.
Surely there needs to be some JavaScript code in the "head"
that is returned by the call to `App.render` in `src/server.js`,
but that gives an empty string.

The primary files to examine are
`src/App.svelte`, `src/server.js`, and `rollup.ssr-config.js`.

To run this app locally where it works correctly,
enter `npm run dev` and browse localhost:5000.
