const express = require('express');
const Articles = express.Router();

Articles.get('/', (req, res) => {
  res.send('this is the articles route');
});

module.exports = Articles;
