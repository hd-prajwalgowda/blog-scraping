const express = require('express');
const userRoute = require('./user.routes');
const articlesRoute = require('./articles.routes');
const commentsRoute = require('./comments.routes');
const tagsRoute = require('./tags.routes');
const topicsRoute = require('./topics.routes');

const router = express.Router();

router.use('/users', userRoute);
router.use('/articles', articlesRoute);
router.use('/comments', commentsRoute);
router.use('/tags', tagsRoute);
router.use('/topics', topicsRoute);

module.exports = router;
