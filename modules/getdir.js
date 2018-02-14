const fs = require('fs');
const path = require('path');
const async = require('async');

dirArray = (targetDir) => {
   let resultDirArray = [];
   let fsObjArray = fs.readdirSync(targetDir);
   async.forEach(fsObjArray, (file) => {
      if (fs.statSync(path.join(targetDir, file)).isDirectory()) {
         resultDirArray.push(file);
      }
   });
   return resultDirArray;
}

module.exports = dirArray;
