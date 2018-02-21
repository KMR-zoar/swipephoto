const modules = require('../modules/paginate');
const assert = require('assert');

describe("Paginate",() => {
   const testArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
   it("pagination.minimum", () => {
      assert.equal(
         JSON.stringify({
            array: ["a", "b", "c"],
            maxPage: 3,
            page: 1
         }),
         JSON.stringify(
            paginate(testArray, 3, 1)
         )
      )
   });

   it("pagination.maximum", () => {
      assert.equal(
         JSON.stringify({
            array: ["i"],
            maxPage: 3,
            page :3
         }),
         JSON.stringify(
            paginate(testArray, 4, 3)
         )
      )
   });

   it("pagination.limit_larger_than_count",() => {
      assert.equal(
         JSON.stringify({
            array: ["a", "b", "c", "d", "e", "f", "g", "h", "i"],
            maxPage: 1,
            page :1
         }),
         JSON.stringify(
            paginate(testArray, 10, 1)
         )
      )
   });

   it("pagination.page_larger_than_maxpage",() => {
      assert.equal(
         JSON.stringify({
            array: ["a", "b", "c", "d", "e", "f", "g", "h", "i"],
            maxPage: 1,
            page: 1
         }),
         JSON.stringify(
            paginate(testArray, 10, 2)
         )
      )
   });
});