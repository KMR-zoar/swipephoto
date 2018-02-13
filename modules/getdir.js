var fs = require('fs');
var path = require('path');
var async = require('async');

dirArray = (targetDir) => {
   var resultDirArray = [];
   var fsObjArray = fs.readdirSync(targetDir);
   async.forEach(fsObjArray, (file) => {
      if (fs.statSync(path.join(targetDir, file)).isDirectory()) {
         resultDirArray.push(file);
      }
   });
   return resultDirArray;
}

module.exports = dirArray;
