Desde la ES6 con let y const, vino tmb la discusion entre block y function scope.

Ahora el block scope se ejecuta basicamente en cualquier bloque de codigo. Por ejemplo tenemos el caso de if:


```
if(true) {  
  let name = 'Luke'
}

console.log(name); // name is not defined  
```

When function scope gets confusing
Now that we got the difference between function scope and block scope covered — let’s see why this quickly can get confusing.

Having a local variable inside a scope with the same name as a variable in the outer scope is perfectly fine.

var name = 'Luke';

const func = () => {  
  var name = 'Phil';
  console.log(name); // 'Phil'
}

func();

console.log(name); // 'Luke'  
As expected, name in the outer scope keeps the initial declaration value ‘Luke’ even after func — containing an equally named local variable — has been executed.

The problem however is that since function scope only covers functions and not other types of blocks, we would get a quite different behavior with other blocks.

var name = 'Luke';

if (true) {  
  var name = 'Phil';
  console.log(name); // 'Phil'
}

console.log(name); // 'Phil'

Por esto y por lo de loops la verdad que siempre es mejor user let y const.

SOURCE: https://www.deadcoderising.com/2017-04-11-es6-var-let-and-const-the-battle-between-function-scope-and-block-scope/
