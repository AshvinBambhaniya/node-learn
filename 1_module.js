// https://github.com/john-smilga/node-express-course/blob/main/01-node-tutorial/03-modules.js
// file : 1 - 7

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4_names')
const sayHi = require('./5_utils')
const data = require('./6_alternative')
console.log(data);
require('./7_mind-grenade')
sayHi('susan')
sayHi(names.name)
sayHi(names.age)