const mongoose = require('mongoose');

const product = mongoose.Schema({
  name: { type: String, required: true },
  tagline: { type: String, required: true },
  url: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
  imageLogo: { type: String }

});

module.exports = mongoose.model('Product', product);
