const getJpeg = require('../modules/getjpeg');
const config = require('../config.json');
const path = require('path');

const testDir = "2018-01-03";

console.log(getJpeg(path.join(config.photodir, testDir)));