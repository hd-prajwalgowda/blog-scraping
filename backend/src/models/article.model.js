const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  coverImage: {
    type: String,
    required: true,
  },
  contentMarkdown: {
    type: String,
    required: true,
  },
  user: {
    name: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      required: true,
    },
  },
  tags: [
    {
      type: String,
      required: true,
    },
  ],
  publishedAt: {
    type: Date,
    required: true,
  },
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
