Que pasa si queres saber la suma de un array en un intervalo?


supongamos que tenes el array 3 2 0 6 5 -1 2, y queres saber la suma de:

de pos 0 a 4: 16 ( 3 2 0 6 5 ) = 16.

de pos 0 a 6: 17.

Ahora, podemos dejar el array  hecho precalculando el array haciendo:

3 + 0, 3 + 2, 5 + 0, 5 + 6, 11 + 5, 16 + -1, 15 + 2
  3      5      5  ,   11 ,   16   ,  15   , 17


  Ahora, si bien acceder a los resultados ahora es O(1), agregando uno tenes que recaucluar todo de nuevo.

  Aca podes usar un finweck tree:


  El padre de cada nodo en el finweck tree se calcula flipeando el most right 1 de un numero binario.

  10 en binario = 1010, si volamos el 1 mas a la derecha = 1000. el padre del 10 es el 8.

  INVESTIGAR IMPLEMENTACION: https://www.youtube.com/watch?v=CWDQJGaN1gY&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=19

  Pare entenderlo habria que hacer le codigo pero en resumen te permite actualizar el array anterior con una eficiencia de log n.
