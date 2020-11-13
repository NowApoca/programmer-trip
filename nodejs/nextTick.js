const EventEmitter = require('events');
const util = require('util');

function MyEmitter() {
	console.log('ENTRO ACA E')
  EventEmitter.call(this);
	console.log('ENTRO ACA F')
process.nextTick(() => {console.log('ENTRO ACA A')})
	// Without nextTick, the code does the following: Constructor -> Emit the event -> assign a callback to an event. We dont want it, we want to emit the evento so we put nextTick for: Constructor -> (we put a callback to the nextTick, so first the event loop have to end the syncrhonus call what initialize the callback to a event.) Put the callback with 'event' event -> emit event -> Event's callback execute
	console.log('ENTRO ACA G')
	// There is something very interesting here. The log in the 'event' event listener will be called first than 'B2' log. The thing is this.emit emit events syncronously. If you want to run 'event' event listener asynchronously, you have to put an setImmediate or throw another callback. Cite the nodejs documentation: The EventEmitter calls all listeners synchronously in the order in which they were registered. This ensures the proper sequencing of events and helps avoid race conditions and logic errors. When appropriate, listener functions can switch to an asynchronous mode of operation using the setImmediate() or process.nextTick() methods 
process.nextTick(() => {console.log('ENTRO ACA B');this.emit('event'); console.log('B2')})
	console.log('ENTRO ACA H')
process.nextTick(() => {console.log('ENTRO ACA C')})
	console.log('ENTRO ACA I')
}
util.inherits(MyEmitter, EventEmitter);

const myEmitter = new MyEmitter();
console.log('entro aca 2')
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
