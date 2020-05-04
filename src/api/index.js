const express = require('express');
const routes = require('./routes/index');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Konnichiwa to Aruppi API 🎏',
    author: 'Jeluchu',
    entries: [
      {
        'Season': 'Soon',
        'ArchiveSeasons': 'Soon',
        'Schedule': 'Soon',
        'MoreInfo': 'Soon',
        'Images': 'Soon',
        'Season': 'Soon'
      }
    ]
  });
});

router.use('/', routes);

module.exports = router;
