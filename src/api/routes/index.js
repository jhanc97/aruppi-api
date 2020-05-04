const express = require('express');
const router = express.Router();
const api = require('../api');

router.get('/news' , (req , res) =>{
  api.news()
    .then(news =>{
      res.status(200).json({
        news
      });
    }).catch((err) =>{
      console.error(err);
    });
});

module.exports = router;
