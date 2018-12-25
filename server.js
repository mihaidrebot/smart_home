'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
// app.get('/', (req, res) => {
//   res.send('Testing \n');
// });

app.get('*', function(req, res) {
  res.sendfile('./frontend/src/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

app.listen(PORT, HOST,()=>{
  console.log(`Running on http://${HOST}:${PORT}`);
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