const modules = require('../modules/getjpeg');
const assert = require('assert');

describe("GetJpegFileArray",() => {
   it("getjepg",() => {
      assert.equal(
         "2016-03-14 08.24.40.jpg".toString(), 
         jpegArray("photos/2016-03-14").toString()
      )
   });
});