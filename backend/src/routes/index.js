const express = require('express');
const authRoute = require('./auth.routes');
const apiRoute = require('./api/index');

const router = express.Router();

router.use('/auth', authRoute);
router.use('/api', apiRoute);

module.exports = router;
