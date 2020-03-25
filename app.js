const fs = require('fs');
const getNotes = require('./notes.js');

fs.writeFileSync('notes.txt', getNotes().title)
fs.appendFileSync('notes.txt', getNotes().body)

