const express = require('express');
import App from './App.svelte';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  // If the app uses path or query parameters,
  // get the values from req.  For example,
  // this gets the "name" from query parameter.
  const {name = 'World'} = req.query;

  // Render the App component with the "name" prop.
  // head is set when <svelte:head> is used.
  const {head, css, html} = App.render({name});

  const style = css.code ? `<style>${css.code}</style>` : '';

  const template = `
       <html>
         <head>
           ${head}
           <script src="./public/bundle.js" />
           ${style}
         </head>
         <body>
           ${html.trim()}
         </body>
       </html>
     `;

  res.send(template);
});

const PORT = 5000;
app.listen(PORT, () => console.log('listening on port', PORT));
