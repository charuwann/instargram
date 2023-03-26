const express = require('express');
const app = express(),
      port = 3080;

app.get('/data', (req, res) => {
  let jsonData = require('./data.json');
  res.json(jsonData);
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});