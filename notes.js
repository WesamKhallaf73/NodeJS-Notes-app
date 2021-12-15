
const fs = require('fs')
const chalk = require('chalk')

const getNotes =  () => {
    return 'your notes .....'
}
const  addNotes  = (title , body) => {

    

    const notes = loadNotes()

  
      const dublicateNote = notes.find((note) =>  title === note.title  )

   
   
    if( !dublicateNote )  {
    notes.push({
        title : title ,
        body : body
    })
    saveNotes(notes)
    console.log(chalk.bgGreen('new note added'))
}
else {
    console.log(chalk.bgRed('this title already exist'))
}

}

const saveNotes = (notes) =>  {
  const dataJson = JSON.stringify(notes) ;
  fs.writeFileSync('notes.json' , dataJson);

  
}

const loadNotes = () =>{

    try {
        const dataBuffer = fs.readFileSync('notes.json')
         const dataJson = dataBuffer.toString()
         return JSON.parse(dataJson)

    }
    catch(e) {
        return []

    }

    


}

const  removeNote  = (title ) =>  {

    const read = loadNotes()

    const updatedNotes = read.filter((note) =>  title != note.title  )

   
        

    if (read.length != updatedNotes.length) {
        console.log(chalk.bgGreen('note reovmed'))
        saveNotes(updatedNotes)
    }
    else {
        console.log(chalk.bgRed('note does not exit'))
    }

    
        
        
    


}
const listNotes = () => {
    const list = loadNotes()
    console.log(chalk.blue.bold.italic("Your notes "))
    
    
    list.forEach((note) =>{
        console.log(chalk.green(note.title))
    })

}

const readNote = (title) =>{ 
    
    const notes = loadNotes()

  
      const foundNote = notes.find((note) =>  title === note.title  )

   
   
    if( foundNote )  {
        console.log ( chalk.green("title is :  " ) + chalk.bgGreen( foundNote.title) + chalk.blue( "   body :  ") + chalk.bgBlue(foundNote.body ))
    } else {
        console.log(chalk.bgRed(" no note with this title exist"))
    }

}

module.exports = {
    getNotes : getNotes ,
    addNotes : addNotes ,
    removeNote : removeNote ,
    listNotes : listNotes ,
    readNote : readNote

}

