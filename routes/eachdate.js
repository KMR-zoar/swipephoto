const express = require('express');
const router = express.Router();
const getJpeg = require('../modules/getjpeg');
const config = require('../config.json');
const path = require('path');
const paginate = require('../modules/paginate');
const postToSlack = require('../modules/posttoslack');

const limit = config.pagelimit;

router.get('/:date', (req, res, next) => {
   let page;
   if (req.query.page) {
      page = req.query.page;
   } else {
      page = 1;
   }
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

 router.post('/:date', (req, res, next) => {
   postToSlack(req.body.dirname + " を見ました｡");
   res.redirect('/');
 });

 module.exports = router;
