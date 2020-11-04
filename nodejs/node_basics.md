NodeJS

Event loop:
	Introduction:
		NodeJS is single thread, but with the Event Loop you can prevent of get stuck by infinite asyncron loops. A single thread enviroment is excelent for abstracting about concurrency stuff. Your code run with a single event loop in a single process/thread. Syncrhonic files load or loops block the event loop. The next task of the event loop will be called when a syncronic function returns the control to the event loop. It throws actions to the kerner whenever is possible just like requests, native built in tools, IPC calls, etc.
	Call stack: 
		Every called function comes into the Call stack (Last In, Last Out). It will execute things in order. There are another operations, like setTimeout, that wait until the call stack is empty and then it executes the time out. See the next example extracted from nodejs documentation:
			```
const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  setTimeout(bar, 0)
  baz()
}

foo()
			```
		If I put a infinite loop after baz, bar will never be called. And where does bar() go? It goes to Message queue. It doesnt mean that when call stack ends, you have to wait to the timeOut to occour. That happens in browser thread or nodejs thread because it is a built in functionality. Just JS code have to wait, js code that run in the single thread of browser or nodejs.
	Message Queue:
		It runs tasks after call stack is empty. However, as native built in tools, it run in other threads in case of for example setTimeOut
	Job Queue:
		It executes promises. Promises are put right before the function ends, before the message queue.

