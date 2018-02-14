const fs = require('fs');
const path = require('path');
const async = require('async');

jpegArray = (targetDir) => {
   let resultJpegArray =[];
   let jpegFileArray = fs.readdirSync(targetDir);
   async.forEach(jpegFileArray, (file) => {
      if (fs.statSync(path.join(targetDir, file)).isFile() && /.*\.jpg$/.test(file)) {
         resultJpegArray.push(file);
      }
   });
   return resultJpegArray;
};

module.exports = jpegArray;