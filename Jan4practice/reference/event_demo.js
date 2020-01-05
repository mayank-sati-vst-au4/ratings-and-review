const EventEmmitter = require('events');

// Create class
class MyEmitter extends EventEmmitter {}

// INIT OBJECT

const myEmitter = new MyEmitter();

// EVENT LISTNER
myEmitter.on('event', ()=> console.log('Event fired successfully'));

// INIT EVENT
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');