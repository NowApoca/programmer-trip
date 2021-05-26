Simply put, an execution context is an abstract concept of an environment where the Javascript code is evaluated and executed. Whenever any code is run in JavaScript, it’s run inside an execution context.

Hay 3 tipos:

contexto global: basicamente, aca va todo el codgo que no esta dentro de una funcion, como por ejemplo algunas funciones en si o constantes o variables, variables de entorno, windows en browsers, etc.

Contexto local: Cada vez que corres una funcion, creas un contexto local para esa funcion. Si no encontras una variable de ese scope dentro del mismo, vas a subir hasta encontrarlo. Si llegaste al global y no aparece, throweas error.

Eval cuntion context: Code executed inside an eval function also gets its own execution context, but as eval isn’t usually used by JavaScript developers, so I will not discuss it here.

Antes de ejecutar cualquier codigo, se generla el contexto global de ejecucion.

Como se forma esteo? en 2 pasos, creation and execution phase.

Creation phase: La fase de creacion crea 2 cosas: lexicalEnviroment y variableenviroment components.

Lexical: El lexical enviroment es el objeto que guarda la referencia al valor de las variables y funciones

For example, consider the following snippet:
var a = 20;
var b = 40;
function foo() {
  console.log('bar');
}
So the lexical environment for the above snippet looks like this:
lexicalEnvironment = {
  a: 20,
  b: 40,
  foo: <ref. to foo function>
}

Cada lexical enviroment contiene 3 cosas: Enviroment record, referencia al outer enviroment (el nivel mas arriba) y el this binding.

Enviroment record:

	The environment record is the place where the variable and function declarations are stored inside the lexical environment.
	hay 2 tipos: 
	Declarativo: guarda las declaraciones de las variables y de las funciones.
	Object enviroment record: Ademas de las declaraciones, el Objevct enviroment record guarda un binding global, como por ejemplo en browsers el window o en nodejs el process. Estos guardan procesos mismos del entorno donde se corren como el dom y eso.

NOTA: para las funciones, el enviroment record tambien guarda los argumentos en un objeto donde 0: 5, guarda el valor de la variable 0, 1: 6 el valor de la segunda, y length: 2 guarda la cantidad de argumentos.

Reference to the Outer Environment: esto quiere decir que cada enviroment puede buscar variables en el enviroment de encima

This binding:

	Aca se setea this. El valor de this global es en caso de los browsers window o en nodejs process.
	En el caso de estar dentro de una funcion hay un par de opciones:

		Si te llama un objeto, this es del objeto
		Si es una arrow function, this es del lugar donde la arrow function fue llamada
		Si usas strict mode, this es undefined


Variable enviroment: 

As written above, the variable environment is also a lexical environment, So it has all the properties and components of a lexical environment as defined above.

Desde la ES6, la unica diferencia es que el lexical guarda let y const y el variable enviroment guarda var.

Execution Phase
In this phase assignments to all those variables are done and the code is finally executed.


EXAMPLE:

Let’s look at some example to understand the above concepts:
let a = 20;
const b = 30;
var c;
function multiply(e, f) {
 var g = 20;
 return e * f * g;
}
c = multiply(20, 30);
When the above code is executed, the JavaScript engine creates a global execution context to execute the global code. So the global execution context will look something like this during the creation phase:
GlobalExectionContext = {
  LexicalEnvironment: {
    EnvironmentRecord: {
      Type: "Object",
      // Identifier bindings go here
      a: < uninitialized >,
      b: < uninitialized >,
      multiply: < func >
    }
    outer: <null>,
    ThisBinding: <Global Object>
  },
  VariableEnvironment: {
    EnvironmentRecord: {
      Type: "Object",
      // Identifier bindings go here
      c: undefined,
    }
    outer: <null>,
    ThisBinding: <Global Object>
  }
}
During the execution phase, the variable assignments are done. So the global execution context will look something like this during the execution phase.
GlobalExectionContext = {
LexicalEnvironment: {
    EnvironmentRecord: {
      Type: "Object",
      // Identifier bindings go here
      a: 20,
      b: 30,
      multiply: < func >
    }
    outer: <null>,
    ThisBinding: <Global Object>
  },
VariableEnvironment: {
    EnvironmentRecord: {
      Type: "Object",
      // Identifier bindings go here
      c: undefined,
    }
    outer: <null>,
    ThisBinding: <Global Object>
  }
}


When a call to function multiply(20, 30) is encountered, a new function execution context is created to execute the function code. So the function execution context will look something like this during the creation phase:
FunctionExectionContext = {
LexicalEnvironment: {
    EnvironmentRecord: {
      Type: "Declarative",
      // Identifier bindings go here
      Arguments: {0: 20, 1: 30, length: 2},
    },
    outer: <GlobalLexicalEnvironment>,
    ThisBinding: <Global Object or undefined>,
  },
VariableEnvironment: {
    EnvironmentRecord: {
      Type: "Declarative",
      // Identifier bindings go here
      g: undefined
    },
    outer: <GlobalLexicalEnvironment>,
    ThisBinding: <Global Object or undefined>
  }
}
After this, the execution context goes through the execution phase that means assignments to the variables inside the function are done. So the function execution context will look something like this during the execution phase:
FunctionExectionContext = {
LexicalEnvironment: {
    EnvironmentRecord: {
      Type: "Declarative",
      // Identifier bindings go here
      Arguments: {0: 20, 1: 30, length: 2},
    },
    outer: <GlobalLexicalEnvironment>,
    ThisBinding: <Global Object or undefined>,
  },
VariableEnvironment: {
    EnvironmentRecord: {
      Type: "Declarative",
      // Identifier bindings go here
      g: 20
    },
    outer: <GlobalLexicalEnvironment>,
    ThisBinding: <Global Object or undefined>
  }
}

Note — As you might have noticed that the let and const defined variables do not have any value associated with them during the creation phase, but var defined variables are set to undefined . ESTO ES IMPORTANTE CUANDO QUEREMOS ENTENDER PORQUE ROMPE CUANDO QUEREMOS USAR LET Y NO ESTA DECLARADO PERO CUANDO USAMOS VAR SI.

SOURCE: https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0
SOURCE: BUENA EXPLICACION DE LOS SCOPES https://www.telerik.com/blogs/understanding-scope-in-javascript
SOURCE: http://speakingjs.com/es5/ch16.html con buenas practicas de closures.
