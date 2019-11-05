const express = require('express');
//const fs = require('fs');
//const bundle = fs.readFileSync('public/bundle.js', {encoding: 'utf8'});
//const html = `<html><head><script>${bundle}</script></head></html>`;

//import App from '../public/bundle.js';
const App = require('../public/bundle.js');
const html = App.render();

const app = express();
app.get('/', (req, res) => res.send(html));

const PORT = 1919;
app.listen(PORT, () => console.log('listening on port', PORT));
