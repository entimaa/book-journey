// models/Quote.js
const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
  text: { type: String, required: true },
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
  audioNote: { type: String } // رابط ملف صوتي
});

module.exports = mongoose.model('Quote', QuoteSchema);