const express = require('express');
const router = express.Router();
const getJpeg = require('../modules/getjpeg');
const config = require('../config.json');
const path = require('path');

router.get('/:date', function(req, res, next) {
   let date = req.params.date;
   const photoDir = path.join(config.photodir, date);
   let jpegArray = getJpeg(photoDir);
   res.render('eachdate', {
     title: '画像確認ページ',
     photoDir: photoDir,
     jpegArray: jpegArray
   });
 });
 
 module.exports = router;
 