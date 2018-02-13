var fs = require('fs');
var path = require('path');
var async = require('async');

jpegArray = (targetDir) => {
   var resultJpegArray =[];
   var jpegFileArray = fs.readdirSync(targetDir);
   async.forEach(jpegFileArray, (file) => {
      if (fs.statSync(path.join(targetDir, file)).isFile() && /.*\.jpg$/.test(file)) {
         resultJpegArray.push(file);
      }
   });
   return resultJpegArray;
};

module.exports = jpegArray;