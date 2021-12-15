
const chalk = require('chalk');
const notes = require('./notes.js');
const yargs = require('yargs');
//console.log( process.argv )
//
//console.log(yargs.argv)


yargs.version("1.1.2")


yargs.command({
    command : 'add' ,
    describe: 'adding note' , 

    builder : {
        title : {
            describe : 'node title' ,
            
            demandOption : true ,
            type : 'string'
        } ,

        body : {
            describe : 'node body' ,
            
            demandOption : true ,
            type : 'string'
        }
    }
    ,
    handler  (argv)  { notes.addNotes(argv.title , argv.body) }
       
        
    

})


yargs.command({
    command : 'remove' ,
    describe: 'removing a  note' ,


    builder : {
        title : {
            describe : 'node title' ,
            
            demandOption : true ,
            type : 'string'
        }
    }
        ,
   
    handler (argv) {
        notes.removeNote(argv.title)
    }

})

yargs.command({
    command : 'list' ,
    describe: 'listing of all notes' ,
   
    handler  () {
        notes.listNotes()
    }

})
yargs.command({
    command : 'read' ,
    describe: 'reading notes by Title' ,
    builder : {
        title : {
            describe : 'node title' ,
            
            demandOption : true ,
            type : 'string'
        }
    }
    ,
   
   
    handler (argv)  {
        notes.readNote(argv.title)
    }

})

yargs.parse()



   





