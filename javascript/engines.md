Engines
Is JS compiled? SOURCE: https://softwareengineering.stackexchange.com/questions/138521/is-javascript-interpreted-by-design

The V8 JavaScript VM used in Chrome doesn't include an interpreter. Instead it consists of two compilers and compiles the code on the fly. One of the compilers runs quickly but generates inefficient code, the other is an optimizing compiler.

I can understand why some people would consider this "cheating", since V8 takes source code as input every time the code runs and the user has to have V8 installed. But consider a compiler which emits an executable which includes a complete interpreter and bytecode. Then you would have a stand-alone program. It just wouldn't be very efficient.


SOURCE: https://blog.bitsrc.io/javascript-engines-an-overview-2162bffa1187



COMPILED JS: https://blog.bitsrc.io/should-you-compile-your-javascript-code-a857ad2e3032
