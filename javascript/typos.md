Primitives typos: they are immutable. They are not modified, they are replaced. It is important because you will not store the reference. Thats important because objects are not immutable, and you can carry bugs just as:

> let a = {manu: 5}
> a
{ manu: 5 }
> let b = a
> a
{ manu: 5 }
> b
{ manu: 5 }
> b.manu = 7
7
> b
{ manu: 7 }
> a
{ manu: 7 }
 
> let c = 7
undefined
> let d = c
undefined
> c = 8
8
> d
7

In primitives you store value, in objects you store reference.

Number

	Is a 64 bit binary floating point type, so decimal operatios often carries inexact values, as an example:

> 0.2 + 0.1
	0.30000000000000004

Invalid arithmetic operations or invalid conversions will not throw an exception, but will result in the NaN “Not-a-Number” value. Number.isNaN() can detect NaN .

The + operator can add or concatenate.

STRINGS in JS are supported with ' or "

BOOLEANS

false, null, undefined, ''(empty string), 0 and NaN are falsy

VARIABLES

Variables declared with var have a function scope. They are treated as declared at the top of the function. This is called variable hoisting. If no value is declared it starts undefined

The let declaration has a block scope. If you dont declare it, it will throw an error if you use it before declaring it

Const is similar to let in therms of scope. A variable declared with const cannot be reassigned. Its value, however, can still be mutable. const freezes the variable, Object.freeze() freezes the object. The const declaration has a block scope.

There are two ways to access properties: dot notation and bracket notation. We can read, add, edit and remove an object’s properties at any time.

get: object.name, object[expression]
set: object.name = value, object[expression] = value
delete: delete object.name, delete object[expression]
	let obj = {}; //create empty object
	obj.message = "A message"; //add property
	obj.message = "A new message"; //edit property
	delete obj.message; //delete property

delete obj.property or obj.property = undefined are the best ways of deleting an obj property, I prefer delete because it improves readibility.

All object’s properties are public. Object.keys() can be used to iterate over all properties.
If you want to make a property 'private', you should use a closure

You can make a Object immutable using Object.freeze

ARRAYS

Note that arr[1] gives the same value as arr['1'] : arr[1] === arr['1'] .

JavaScript’s arrays don’t throw “index out of range” exceptions. If the index is not available, it will return undefined.

FUNCTIONS

Functions are objects. Functions can be assigned to variables, stored in objects or arrays, passed as an argument to other functions, and returned from functions.

There are three ways to define a function:

Function Declaration (aka Function Statement)
Function Expression (aka Function Literal)
Arrow Function

The Function Declaration
	function is the first keyword on the line or the second if is async
	it must have a name
	it can be used before definition. Function declarations are moved, or “hoisted”, to the top of their scope. That is important, order in the file doesnt matter.

The Function Expression
	function is not the first keyword on the line
	the name is optional. There can be an anonymous function expression or a named function expression.
	it needs to be defined, then it can execute
	it can auto-execute after definition (called “IIFE” Immediately Invoked Function Expression)

Arrow Function
	The arrow function is a sugar syntax for creating an anonymous function expression.
	Arrow functions don’t have their own this and arguments.


Arguments:

An alternative is the new rest parameters syntax. This time args is an array object.
function logAll(...args){
  return args.forEach(log);
}

And object can  be used and it works as a filter

function logAll({manu, manu1})

It doesnt matter how much arguments are passed, we just use manu and manu1.

return
	A function with no return statement returns undefined. Pay attention to the automatic semi-colon insertion when using return. The following function will not return an empty object, but rather an undefined one.
	function getObject(){ 
	  return
	  {
	  }
	}
	getObject()

To avoid the issue, use { on the same line as return :
function getObject(){ 
  return {
  }
}

SOURCE: https://medium.com/programming-essentials/learn-these-javascript-fundamentals-and-become-a-better-developer-2a031a0dc9cf
