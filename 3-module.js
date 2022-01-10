//CommonJs, every file is module (by default)
//Module - Encapsulated Code (only share minimum)

const names = require('./4-name');
const sayHi = require('./5-utilis');
// console.log(names);
const data = require('./6-alternative-flavor')
// console.log(data)
// sayHi('susan');
// sayHi(names.john);
// sayHi(names.perter)
require('./7-mind-granade')