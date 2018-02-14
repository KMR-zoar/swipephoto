const express = require('express');
const router = express.Router();
const getDir = require('../modules/getdir')
const config = require('../config.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  let dirArray = getDir(config.photodir);
  res.render('index', {
    title: '日付を選択',
    dirArray: dirArray
  });
});

module.exports = router;
