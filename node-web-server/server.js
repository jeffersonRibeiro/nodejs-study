const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World 123');
});

app.listen(3000, 'localhost', () => {
  console.log('Server listing on localhost:3000');
});