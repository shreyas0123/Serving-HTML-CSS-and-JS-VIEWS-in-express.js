const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/success', (req, res, next) => {
  res.send('<h1>Form successfully filled</h1>');
});

module.exports = router;
