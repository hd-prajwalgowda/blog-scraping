const express = require('express');
const Follows = express.Router();

Follows.get('/', (req, res) => {
  res.send('this is the follows route');
});

module.exports = Follows;
