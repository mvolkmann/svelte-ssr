const express = require('express');
require('svelte/register');

const name = 'Planet';

const template = `
  <html>
    <head>
      HEAD
      <style>
        CSS
      </style>
      <script type='module'>
		    import App from './build/App.svelte';
		    new App({
          hydrate: true
        });
    	</script>
    </head>
    <body>
      HTML
    </body>
  </html>
`;

const app = express();
//express.static.mime.define({'text/html': ['svelte']});
app.use(express.static('public'));

app.get('/ssr', (req, res) => {
  // See https://svelte.dev/docs#Server-side_component_API
  const App = require('../public/build/ssr.js');
  const {head, html, css} = App.render({name});
  console.log('server.js x: html =', html);
  const result = template
    .replace('HEAD', head)
    .replace('CSS', css.code)
    .replace('HTML', html);
  res.set('Content-Type', 'text/html');
  res.end(result);
});

const PORT = 1919;
app.listen(PORT, () => console.log('listening on', PORT));
