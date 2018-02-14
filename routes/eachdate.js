const express = require('express');
const router = express.Router();
const getJpeg = require('../modules/getjpeg');
const config = require('../config.json');
const path = require('path');

router.get('/:date', function(req, res, next) {
   let date = req.params.date;
   let jpegArray = getJpeg(path.join(config.photodir, date));
   res.render('eachdate', {
     title: '画像確認ページ',
     jpegArray: jpegArray
   });
 });
 
 module.exports = router;
 