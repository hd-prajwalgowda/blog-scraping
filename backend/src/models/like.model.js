const mongoose = require('mongoose');

const likeSchema = mongoose.Schema({
  articleId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Article',
    required: true,
  },
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Like = mongoose.model('Article', likeSchema);

module.exports = Like;
