const express = require('express');

const App = require('../public/bundle.js');
const html = App.render();

const app = express();
app.get('/', (req, res) => res.send(html));

const PORT = 1919;
app.listen(PORT, () => console.log('listening on port', PORT));
