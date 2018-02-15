const express = require('express');
const router = express.Router();
const getJpeg = require('../modules/getjpeg');
const config = require('../config.json');
const path = require('path');
const paginate = require('../modules/paginate');

const limit = config.pagelimit;

router.get('/:date', function(req, res, next) {
   let page = req.query.page;
   let date = req.params.date;

   const photoDir = path.join(config.photodir, date);
   let jpegArray = getJpeg(photoDir);

   let displayObj = paginate(jpegArray, limit, page);
   res.render('eachdate', {
     title: '画像確認ページ',
     photoDir: photoDir,
     jpegArray: displayObj.array,
     maxPage: displayObj.maxPage,
     page: page
   });
 });
 
 module.exports = router;
 