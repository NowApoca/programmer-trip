Javascript has 5 data types that are passed by value: Boolean, null, undefined, String, and Number. We’ll call these primitive types.
Javascript has 3 data types that are passed by reference: Array, Function, and Object. These are all technically Objects, so we’ll refer to them collectively as Objects.

Cuando asignamos un valor primitivo, nosotros COPIAMOS el valor y se lo asignamos al espacio de memoria destino.

CUando = un objeto, le pasamos la REFERENCIA.

Esto tiene implicacias muy grandes que por ejemplo pasar un primitivo a una funcion no cambia el valor si se modifica dentro de la func, pero si le pasamos un objeto si se modifica si haces algo dentro.

For example:

var x = 10;
var y = 'abc';
var a = x;
var b = y;
console.log(x, y, a, b); // -> 10, 'abc', 10, 'abc'

Change x doesnt change a as change y doesnt change b.

It is not the case with Arrat objects and functins. AS u pass the reference, not the value, things will change if u change them inside the function.

En esto afecta un poco el == y ===. El === chequea la referencia en caso de que se tenga una referencia y da true SOLO si es la misma referencia hablando de objetos y eso.

La opcion mas recomendable para chequear si 2 objetos son similares es si iteras en todas las propiedades de uno y las comparas una con  la otra.

Pure functions should not touch external scope. So, if u pass an object, it should not be modified.
All variables created inside are garbage-collected as soon as the function returns.

SOURCE: https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0
