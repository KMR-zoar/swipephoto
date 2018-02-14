const express = require('express');
const router = express.Router();
const getJpeg = require('../modules/getjpeg');
const config = require('../config.json');
const path = require('path');

router.get('/:date', function(req, res, next) {
   let date = req.params.date;
   res.render('eachdate', {
     title: '画像確認ページ',
     jpegArray: getJpeg(path.join(config.photodir, date))
   });
 });
 
 module.exports = router;
 