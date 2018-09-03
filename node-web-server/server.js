const hbs = require('hbs');
const express = require('express');


const app = express();

hbs.registerPartials(`${__dirname}/views/partials`);
app.set('view engine', 'hbs');
app.use(express.static(`${__dirname}/public`));
console.log(__dirname);

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    title: 'About',
    desc: 'Just a handlebar template',
    skills: [
      {
        name: 'NodeJs',
        desc: 'Javascript that runs outside of the browser enviroment using the same engine Chrome V8',
      },
      {
        name: 'Mocha, sinon, chai',
        desc: 'Mocha is used to run tests, sinon to make the stubs, mocks and spies and chai for complex assertions'
      },
    ]
  });
});

app.listen(3000, () => {
  console.log('Server is up on localhost:3000');
});