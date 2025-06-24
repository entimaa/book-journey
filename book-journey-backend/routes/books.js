const express = require('express');
const Book = require('../models/Book');
const router = express.Router();

// POST - Save new book
router.post('/', async (req, res) => {
  try {
    const { title, author, status, image } = req.body;

    const newBook = new Book({
      title,
      author,
      status: status || 'to-read',
      image, // store the base64 string
    });

    const savedBook = await newBook.save();
    res.status(201).json({ success: true, data: savedBook });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to save book', error: err.message });
  }
});


// GET - Get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    console.error('❌ Fetch error:', err);
    res.status(500).json({ success: false, message: 'Failed to fetch books', error: err.message });
  }
});

module.exports = router;
