


Heap: WHERE VOLATILE MEMORY ALLOCATE.

stack: WHERE EXECUTION CONTEXTS ARE. LIFO STRUCTURE.

Call stack: one thread == one call stack == one thing at a time

esto no involucra que no puedan hacerse llamados async por cpp

Hay 2 errores que son distintos: Max heap y max call stack

Max heap es que  te quedaste sin memoria y max call stack es qe el stack no tiene mas lugares para funciones. Creo que el max stack call es 16000.

Nunca usemos sync porque cagamos la vida de los eventos del browser. No pueden usar los demas elementos basicamente como botones y eso.


ASYNC:

console.log(a)

setTimeout(() => console.log(b), 5000);

console.log(c).


El stack va a hacer: main() => console.log(a) => setTimeout(func, 5000) => console.log(c) => cb => console.log(b)

Por que pasa esto? pq el cb no entra al stack al principio?

Cuando ejecutamos el setime out, envia al timer ese asyncronico a una step donde va a resolver la tarea. Ese lugar vamos a llamarlo pending callbacks, en google tenemos la webapis pero depende mucho de el enviroment. cuando termine ejecutarse ese timer, va a pasar ese cb a una task queue. Es decir que cuando termine la cb va a entrar a una cola fifo. Cuando salga de esa cola fifo se va a ejecutar en el main thread una vez que el main thread este vacio.

IMPORTANTE: en los timeouts, el tiempo dado es el minimo, no es exacto. Va a depender de que hay en la task queue. Si hay muchas cosas delante va a tardar ese tiempo.


GRAN VIDEO:

https://www.youtube.com/watch?v=8aGhZQkoFbQ

ojo. Aunque tires el foreach en cada function, el delay en algun momento se va a ejecutar en el stack.

Once finished executing, bye is printed, and console.log is removed from the Call Stack.

Notice that by this point, it is at least 300ms after the code originally requested the setTimeout. Meaning even though we asked for it to be executed after only 2ms, we still had to wait for the Call Stack to empty before the setTimeout code on the Event Loop could be executed

Note: Even if we didn't have someSlowFn, setTimeout is clamped to 4ms as the mimimum delay allowed in some cases

buena EXPLICACION: https://gist.github.com/jesstelford/9a35d20a2aa044df8bf241e00d7bc2d0
