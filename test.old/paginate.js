const testArray = require('./testArray');
const paginate = require('../modules/paginate');

let result = paginate(testArray, 5, 2);

console.log(result);