const EventEmitter = require('events');
const util = require('util');

function MyEmitter() {
  EventEmitter.call(this);
	// Without nextTick, the code does the following: Constructor -> Emit the event -> assign a callback to an event. We dont want it, we want to emit the evento so we put nextTick for: Constructor -> (we put a callback to the nextTick, so first the event loop have to end the syncrhonus call what initialize the callback to a event.) Put the callback with 'event' event -> emit event -> Event's callback execute
	console.log('ENTRO ACA 1')
  this.emit('event');
}
util.inherits(MyEmitter, EventEmitter);

const myEmitter = new MyEmitter();
console.log('entro aca 2')
myEmitter.on('event', () => {
  console.log('an event occurred!');
});

