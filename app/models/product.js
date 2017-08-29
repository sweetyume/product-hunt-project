const mongoose = require('mongoose');

const product = mongoose.Schema({
  name: { type: String, required: true },
  tagline: { type: String, required: true },
  url: { type: String, required: true }
});

module.exports = mongoose.model('Product', product);
