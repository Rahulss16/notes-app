const fs = require('fs')   // fs libarary is file system from nodeJS
const chalk = require('chalk') 

const getNotes = () => {
    const notes = {};
    notes.title = 'My Name is Rahul Singh Shekhawat.';
    notes.body = ' I live in India.';
    return notes;
}

const addNote = (title,body) => {
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)
    
    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse.bold('New Note added!'))
    }else {
        console.log(chalk.red.inverse.bold('Note Title already added!'))
    }
}
const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse.bold('Note Removed!'))
        saveNotes(notesToKeep)
    }else {
        console.log(chalk.red.inverse.bold('Note '+ title + ' not exists!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse("Your notes"))
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const existNote = notes.find((note) => note.title === title)

    if(existNote){
        console.log(chalk.green.blue('Title - ' + existNote.title))
        console.log(chalk.green.blue('Body - ' + existNote.body))
    }else {
        console.log(chalk.red.inverse.bold('Note '+ title + ' not found!'))
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}