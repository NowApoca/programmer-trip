Hay 2 tipos de tasks: Las macro y las micro.

Las macro tasks son aquellas que vimos como los setTimeOut. Las microtasks son por ejemplos los .then de los Promises.

El orden de ejecucion es el siguiente:

Se ejecuta el script
En el medio se lanza una microtask y una macrotasks

Termina el script
revisamos si hay microtasks.
Ejecutamos la micro tasks
Se envia otra microtask
la ejecutamos tmb
terminan ambas micro task
empieza la macrotasks
termina.

En cada browser se comporta a su manera. Citando al source:

Some browsers log script start, script end, setTimeout, promise1, promise2. They're running promise callbacks after setTimeout. It's likely that they're calling promise callbacks as part of a new task rather than as a microtask.

This is sort-of excusable, as promises come from ECMAScript rather than HTML. ECMAScript has the concept of "jobs" which are similar to microtasks, but the relationship isn't explicit aside from vague mailing list discussions. However, the general consensus is that promises should be part of the microtask queue, and for good reason.

SOURCE: https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

esto es asi pq tener promises como tasks traeria problemas de performance.



