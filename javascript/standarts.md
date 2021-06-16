1. Por supuesto poner buenos nombres. Los nombres segun el caso deben:
	Las variables deben empezar o ser sustantivos.
		Las estructuras por ejemplos listas que tengan otros elementos, deben ser plural. Por ejemplo autos
		Las entidades deben estar en singular. por ejemplo auto
	Las funciones deben comenzar con un verbo

	TODOS LOS IDS DEBEN SER entidadId

2. Con respecto a los cases: 
	Usar camelCase en variables y funciones.
	Usar SNAKE_CASE con mayusculas en constantes
	Usar PascalCase en constructores, clases, etc.

3. Las asignaciones a variables que son expresiones deben estar en parentesis.

//BAD const flag = i < 4;

//GOOD const flag = (i < 4);


4. Siempre usar ===. Evaluar en algun caso en particular cuando valga la pena == y en lo posible, documentarlo.

5. El operador ternario, debe asignarse a variables, no como si fuera un if.

//BAD
condition ? doSomething() : doSomethingElse();

// GOOD
const value = condition ? value1 : value2;

6. No usar if(condicion) expresion, o
	if(condcion)
		codigo
	o etc. Se debe usar:

//GOOD
if (a === b){
    //code
}

7. Simple statment: no deben hacerse 2 cosas en una linea.
	En vez de
		a = 5; b = 6; 
	Se debe usar:
		a = 5;
		b = 6;

8. los if deben tener los siguientes espacios:

if (condition) {
    doSomething();
}

9. Las variables de los for se deben declarar fuera, no dentro.
// BAD
for (let i=0, len=10; i < len; i++) {  
    // code 
}
// GOOD
let i = 0;
for (i=0, len=10; i < len; i++) {  
    // code 
}

10. La identacion debe ser constante.

11. Las lineas no deben ser mayor a 80 caracteres. este numero se puede discutir en un proyecto en particular, tener en cuenta el ancho de la pantalla.

12. Los strings deben ser ", no '

13. NUNCA se debe usar el valor undefined, en caso de que quieras chequear si es undefined o no, usar type of.



