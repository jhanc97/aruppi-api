const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const api = require('./api');

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
  res.json({
    message: 'Download the Aruppi application in Spanish from the Play Store 👹'
  });
});

app.use('/api/v1', api);

module.exports = app;
