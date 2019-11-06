const express = require('express');
import App from './App.svelte';

const app = express();

app.get('/', (req, res) => {
  // Get "name" from query string.
  const {name = 'World'} = req.query;

  // Do the SSR action using a "name" prop.
  const {head, css, html} = App.render({name});
  //TODO: When will head be set?  I haven't seen that yet.

  // Build the HTML output.
  let output = '<!DOCTYPE output><output>';
  output += '<head>';
  if (head) output += head;
  if (css && css.code) output += `<style>${css.code}</style>`;
  output += '</head>';
  output += '<body>${html}</body>';
  output += '</output>';

  res.send(html);
});

const PORT = 1919;
app.listen(PORT, () => console.log('listening on port', PORT));
