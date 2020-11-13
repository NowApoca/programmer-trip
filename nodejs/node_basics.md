NodeJS

Event loop:
	Introduction:
		NodeJS is single thread, but with the Event Loop you can prevent of get stuck by infinite asyncron loops. A single thread enviroment is excelent for abstracting about concurrency stuff. Your code run with a single event loop in a single process/thread. Syncrhonic files load or loops block the event loop. The next task of the event loop will be called when a syncronic function returns the control to the event loop. It throws actions to the kerner whenever is possible just like requests, native built in tools, IPC calls, etc.
	Call stack (probably the reference in the nodejs documentation is Event Loop. See:-> https://nodejs.org/en/docs/guides/dont-block-the-event-loop/ ): 
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
	Job Queue or Worker Pool:
		It executes promises. Promises are put right before the function ends, before the message queue. It executes tasks that dont have a non-blocking functionality in the OS.
		Jobs that are runned in Worker Pool first have to be processed in the event Loop for dispatch the C++ code in the workeer pool:In many Node.js applications, these APIs are the only sources of tasks for the Worker Pool. Applications and modules that use a C++ add-on can submit other tasks to the Worker Pool.

For the sake of completeness, we note that when you call one of these APIs from a callback on the Event Loop, the Event Loop pays some minor setup costs as it enters the Node.js C++ bindings for that API and submits a task to the Worker Pool. These costs are negligible compared to the overall cost of the task, which is why the Event Loop is offloading it. When submitting one of these tasks to the Worker Pool, Node.js provides a pointer to the corresponding C++ function in the Node.js C++ bindings. 


Promises:
	The promise is a class that receive 2 values: reject and resolve and has 2 attributes: state and value. Initialy, value is undefined and state is pending. State and value changs when you reject or resolve your promise. Promises have a .then, when resolve is applied it executes 'then()' after that. The return of a then can be catched by another chained 'then()'. 'catch()' is called when reject applies [check if catch chains with catch, with then, or not chains].
	
Async: (As a reference: https://www.digitalocean.com/community/tutorials/understanding-the-event-loop-callbacks-promises-and-async-await-in-javascript)
	async functions always return a Promise, where the return value acts as a resolve(). It works like callbacks, but is more sync read format.
