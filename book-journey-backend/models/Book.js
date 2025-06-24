const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  image: String, // store base64 string directly
  status: {
    type: String,
    default: 'to-read'
  },
});


module.exports = mongoose.model('Book', bookSchema);
