const express = require('express');
const Topics = express.Router();

Topics.get('/', (req, res) => {
  res.send('this is the Topics route');
});

module.exports = Topics;
