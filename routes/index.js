const express = require('express');
const router = express.Router();
const getDir = require('../modules/getdir')
const config = require('../config.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: '画像確認ページ',
    dirArray: getDir(config.photodir)
  });
});

module.exports = router;
