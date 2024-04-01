// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

//declaration before 'requires'
// const john = 'John'
// const peter = 'Peter'

//importing some objects
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative')
require('./7-math')

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)