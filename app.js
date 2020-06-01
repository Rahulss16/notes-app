const validator = require('validator')
const yargs = require('yargs')
const notes = require('./notes.js');


//example of validator package
//console.log(validator.isEmail('rahul@24x7host.com'))

// console.log(process.argv); -- to get cmd variables from url node app.js rahul (File System and Command Line Args) then process.argv[2] === 'rahul'

// create add command

yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// create remove command

yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// create list command

yargs.command({
    command: "list",
    describe: "Listing all notes",
    handler() {
        notes.listNotes()
    }
})

// create read command

yargs.command({
    command: "read",
    describe: "Read a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler: function (argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()