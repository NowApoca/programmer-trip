Un trie es un arbol que en vez de valores en los nodos guardamos letras. Una de las aplicaciones que tiene que esta buenisima es para validar palabras. Por ejemplo, tenemos el root character que es una C y tenemos tres palabras que se derivan de este prefijo: CAT, CAR y CARD. A medida que el input vaya creciendo C -> A -> R -> T vamos a estar chequeando muy pcos valores, es decir: en el segundo nivel (la A) vamos a chequear solo que haya una A, si no la hay rompe. Es rapido para estas validaciones.

ta bueno para buscar keys por ejemplo, o diccionarios. El primer root puede estar vacio. Para insertar tambien es facil, es de una complejidad de Log N.

La complejidad en los tries esta dado por O(n.a) donde n es la cantidad de palabras y la a el largo de la palabra con la cual se desea hacer la operacion. Esto quiere decir que la performance va a cambiar segun el largo de la palabra. Esto es en el peor de los casos, ya que en un caso normal, poner una letra no va a triggerear todas las otras palabras.

UNA BIBLIA DE LOS TRIES: https://medium.com/basecs/trying-to-understand-tries-3ec6bede0014

SOURCE: https://tutorialspoint.dev/data-structure/advanced-data-structures/trie-insert-and-search
