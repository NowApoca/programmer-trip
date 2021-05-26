Type coercion means that when the operands of an operator are different types, one of them will be converted to an "equivalent" value of the other operand's type. For instance, if you do:


When javascript expects a type 'a' and a type 'b' is provided, javascript will change the type from 'b' to 'a'. And it could be very dangerous. Look at the following examples:

// concatenation
1 + "2" // "12"
1 + "js" // "1js"

// addition
1 + 2 // 3
1 + 2 + 1 // 4

//addition, then concatenation
1 + 2 + "1" // "31"
(1 + 2) + "1" // "31"

//concatenation all through
1 + "2" + 1 // "121"
(1 + "2") + 1 // "121"

3 * "3" //9
1 + "2" + 1 //121

true + true //2
10 - true //9


const foo = {
  valueOf: () => 2
}
3 + foo // 5
4 * foo // 8

const bar = {
  toString: () => " promise is a boy :)"
}
1 + bar // "1 promise is a boy :)"


4 * [] // 0
4 * [2] // 8
4 + [2] // "42"
4 + [1, 2] // "41,2"
4 * [1, 2] // NaN

"string" ? 4 : 1 // 4
undefined ? 4 : 1 // 1


It could be devastating.

Each type works differennt:


Function, Objects and Arrays => NaN or have a toString object.

Strings: => Number() or NaN if it has no alphanumeric numbers

Numbers: To string basically.


Problems perform when we use +. + means concatenation or adding, so it will cast depending on the types and operations involved.

False that can be casted as false:

false
0
null
undefined
""
NaN
-0
Everything else is truthy,

everything else is true.

NaN is the only Javascript value that is not equal to itself. So you can check for NaN by comparing it to itself.

Be careful about that!

NULL:

nulls equals tu null and undefined, and undefined equals to undefined and null.


SOURCE: https://dev.to/promhize/what-you-need-to-know-about-javascripts-implicit-coercion-e23
SOURCE: https://thedevs.network/blog/type-coercion-in-javascript-and-why-everyone-gets-it-wrong
