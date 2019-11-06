const express = require('express');
import App from './App.svelte';

const app = express();

app.get('/', (req, res) => {
  // Get "name" from query string.
  const {name = 'World'} = req.query;

  // Do the SSR action using a "name" prop.
  // This is run on every request, not at build time.
  // This allows different HTML to be generated based path and query parameters.
  // But it seems undesirable from a performance standpoint if those are not used.
  const {head, css, html} = App.render({name});

  console.log('server.js x: head =', head);
  console.log('server.js x: css =', css);
  console.log('server.js x: html =', html);
  // head is set when <svelte:head> is used.

  const style = css.code ? `<style>${css.code}</style>` : '';
  const template = `
    <html>
      <head>
        ${head}
        ${style}
      </head>
      <body>
        ${html.trim()}
      </body>
    </html>
  `;

  res.send(template);
});

const PORT = 1919;
app.listen(PORT, () => console.log('listening on port', PORT));
