const mongoose = require('mongoose');

const bookmarkSchema = mongoose.Schema({
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

const Bookmark = mongoose.model('Article', bookmarkSchema);

module.exports = Bookmark;
