// routes/quotes.js
const express = require('express');
const router = express.Router();

// Temporary route to avoid errors
router.get('/', (req, res) => {
  res.json({ message: "Quotes route works!" });
});

module.exports = router;