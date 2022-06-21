var fs = require('fs');
var readStream = fs.createReadStream('./demofile.txt');

//write to the console when the file is opened 
readStream.on('opne',function(){
    console.log('The file is open');
})


var events = require('events');
var eventEmitter = new events.eventEmitter();

//create an event handler
var myEventHandler = function(){
    console.log('I here a scream!');
}

//Assign the eventhandler to an event 
eventEmitter.on("scream",myEventHandler);

//Fire the 'scream event:'
eventEmitter.emit('sream');

const goldenrodbutton = document.getElementById('make-goldenrod');
goldenrodbutton.addEventListener('click, GoldenRodBtn')

function GoldenRodBtn(){
    document.body.style.backgroundColor = 'blue';
}