'use strict';

const express = require('express');
const path = require('path');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
// app.get('/', (req, res) => {
//   res.send('Testing \n');
// });
const allowedExt = [
  '.js',
  '.ico',
  '.css',
  '.png',
  '.jpg',
  '.woff2',
  '.woff',
  '.ttf',
  '.svg',
];
app.get('/api', function(req, res) {
  res.send('Testing \n');
});

app.route('/api/cats').get((req, res) => {
  res.send({
    cats: [{ name: 'lilly' }, { name: 'lucy' }]
  });
});

app.route('/api/cats/:name').get((req, res) => {
  const requestedCatName = req.params['name'];
  res.send({ name: requestedCatName });
});

app.get('*', function(req, res) {
  if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
    res.sendFile(path.resolve(`./frontend/dist/frontend/${req.url}`));
  } else {
    res.sendFile(path.resolve('./frontend/dist/frontend/index.html'));
  }
});

app.listen(PORT, HOST,()=>{
  console.log(`Running on http://${HOST}:${PORT}`);
});


