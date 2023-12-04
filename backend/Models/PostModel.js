const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  text: { type: String, required: true },
  likes: { type: Number, default: 0 },
  comments: [{ text: String }],
  createdAt: { type: Date, default: Date.now },
  author: {
    type: String,
    default: `Anonymous${Math.floor(Math.random() * 1000000)}`,
  },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
