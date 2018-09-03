const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({
    name: 'Jeff',
    surname: 'Ribeiro',
    skills: [
      'NodeJs',
      'ReactJs',
      'Webpack',
      'Mocha',
    ],
  });
});

app.listen(3000, 'localhost', () => {
  console.log('Server listing on localhost:3000');
});