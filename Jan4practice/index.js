////// Run by tryping node index
////console.log(" Welcome to nodejs");
////
////// importing or requireing file from person.js in es5 way
////// Common js method
////const Person = require('./person');
////console.log(Person);
////
////// We cannot do this right now, node has not implemented this properly yet so we need to use babel for this.
////// this is es6 way
//////import Person from './person';
////
////
//////
////const person1 = new Person('Mayank Sati', 30);
////const person2 = new Person('Harsh', 40);
////person1.greeting();
////person2.greeting();
//
//// For logger.js
//
//const Logger = require('./logger');
//
//const logger = new Logger();
//
//logger.on('message', data=> console.log('Called listner', data));
//
//logger.on('message', data=> console.log('Called listner', data));
//
//logger.log('Hello World');
//logger.log('I am Mayank');
//logger.log('How are you');

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res)=> {
    if(req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Home</h1>');
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, ()=> console.log(`Server is running at port ${PORT}`));
