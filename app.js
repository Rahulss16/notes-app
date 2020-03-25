const validator = require('validator')
const chalk = require('chalk')
const fs = require('fs');
const getNotes = require('./notes.js');

// fs libarary is file system from nodeJS
// getNotes show how to import own module in node. it export title & body for notes.
fs.writeFileSync('notes.txt', getNotes().title)
fs.appendFileSync('notes.txt', getNotes().body)


//example of validator package
console.log(validator.isEmail('rahul@24x7host.com'))

// example of chalk package
console.log(chalk.green.inverse.bold(getNotes().title));