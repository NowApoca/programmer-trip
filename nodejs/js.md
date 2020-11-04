First of all, if we want to speak about NodeJS we have to focus on Javascript.

Introduction.
	Javascript is a interpreted, multi-paradigm lenguage based on ECMAScript specification. It is interpreted because it is not compiled, each line is interpreted on demand. JS is multi-paradigm because it allows the coder to use Objeci Oriented Programmation, Objects Linked to Other Objects, and Functional programming paradigms.
	By definition, Javascript is the language that is the derivation from the ECMAScript specification. That SPECS define the language and one could build JS in any language. For example, NodeJS uses Google's V8 engine coded in C++, but if you want you can code any engine in Golang, C, C#, etc. The only condition is that you have to implement ECMA specification.

Javascript
	Javascript is weak-typed language. You could asign many different values and types during runtime to a certain var. For example:
		let a = 5
		a = "5az"
		a = {}
		a = new Date()
	'a' had 4 different values with 4 different types. If you want your var be constant, you have to put const before that:

	const a = 5
	a = "some string " // That will throw an error, a can't be reasigned a value

Scoping
	Scoping in Javascript could be realy complex. JS has a lot of different keys, tools and syntax that could be work funny in some contexts, such as closures, block scoping, var vs let, etc. We will try to explain each one.
	var vs let:
		Both are pretty similiar and there are a few contexts where the different matters. Let explain each one:
			Strict mode:
				In strict mode, let vars cant be re-initialized, while var prefix yes. For example:
				'use strict'
				var a = 5
				var a = 6
				let b = 7
				let b = 8 // It throws an error.
			Scoping:
				var is defined inside a function scope, while let is defined in a {} block. For example:
					```
function a(){
        console.log('log 1 b', b)
        var b = 4;
        let c = 5;
        console.log('log 2 b', b)
        if(b){
                let c = 8
                let d = 10
                var i = 11;
                console.log('log 3 c in if', c)
        }
        console.log('log 4 c outside',c)
        console.log('log 5 i outside exists', i)
        console.log('log 6 d not exist')
        console.log(d)
}
a()
					```
			It's output is:
log 1 b undefined                                                                                                                             
log 2 b 4                                                                                                                                     
log 3 c in if 8                                                                                                                               
log 4 c outside 5
log 5 i outside exists 11
log 6 d not exist

        console.log(d)
ReferenceError: d is not defined
			Note that vars declared with var always have a value, even if it was not declared yet (first undefined log), so if you write them they are going to change in the whole scope. Let's see the next example:
			```
var funcs = [];
for (var i = 0; i < 3; i++) {
  funcs[i] = function() {
    // each should log its value.
    console.log("My value: " + i);
  };
}
for (var j = 0; j < 3; j++) {
  funcs[j]();
}
			``` (code source: https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var ).
			"My value: 3" always will be printed because the value of i is the same in the entire function scope.
			Hoisting:
				var vars are declared as undefined at the begining of the scope, and you can access them. let vars instead have to be declared before being useful. If you call a let var before declaring him, it will throw an error. Example:
				```
function run() {
  console.log(foo); // undefined
  var foo = "Foo";
  console.log(foo); // Foo
}

run();

function checkHoisting() {
  console.log(foo); // ReferenceError
  let foo = "Foo";
  console.log(foo); // Foo
}
checkHoisting()
				```
			Global object property:
				var vars are declared in window scope, var dont.
Expresiones
Clases

