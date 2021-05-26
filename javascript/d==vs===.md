When using triple equals === in JavaScript, we are testing for strict equality. This means both the type and the value we are comparing have to be the same. Tambien es comparado que la referencia sea la misma en el caso de arrays objetos o funciones.

'cat' === 'dog'
// false (Both are Strings, but have different values)
false === 0
// false (Different type and different value)

When using double equals in JavaScript we are testing for loose equality. Double equals also performs type coercion. Osea que si es tipos distinots, va a traducir uno al otro.

77 == '77'
// true

FALSY NUMBERS: 

false — boolean false
0 — number zero
“” — empty string
null
undefined
NaN — Not A Number

2. null and undefined
When comparing null and undefined, they are only equal to themselves and each other:
null == null
// true
undefined == undefined
// true
null == undefined
// true

Triple Equals is superior to double equals. Whenever possible, you should use triple equals to test equality. By testing the type and value you can be sure that you are always executing a true equality test.

SOURCE: https://codeburst.io/javascript-double-equals-vs-triple-equals-61d4ce5a121a
