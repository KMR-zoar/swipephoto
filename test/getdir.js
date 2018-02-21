const modules = require('../modules/getdir');
const assert = require('assert');

describe("GetDirectory",() => {
   it("getdir",() => {
      assert.equal(
         ["0000-00-00", "2016-03-14"].toString(), 
         dirArray("photos").toString()
      )
   });
});