var getJpeg = require('../modules/getjpeg');
var config = require('../config.json');
var path = require('path');

var testDir = "2018-01-03";

console.log(getJpeg(path.join(config.photodir, testDir)));