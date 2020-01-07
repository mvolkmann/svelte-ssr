const express = require('express');
require('svelte/register');

const app = express();

const template = `
  <html>
    <head>
      HEAD
      <style>
        CSS
      </style>
    </head>
    <body>
      HTML
    </body>
  </html>
`;

app.get('/', (req, res) => {
  // See https://svelte.dev/docs#Server-side_component_API
  const App = require('../build/ssr.js');
  const {head, html, css} = App.render({
    name: 'World'
  });
  const result = template
    .replace('HEAD', head)
    .replace('CSS', css.code)
    .replace('HTML', html);
  res.end(result);
});

const PORT = 1919;
app.listen(PORT, () => console.log('listening on', PORT));
