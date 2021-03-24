Una estructura arbol es una estructura donde hay un nodo parent que tiene n cantidad de hijos nodos, y asi hasta llegar a una hoja que es un nodo sin hijos.

un binary search tree es un arbol donde cada nodo solo puede tener 2 hijos.

En un arbol balanceado, tantos los inserts como los get van a ser log the N ya que vos dado un numero n, tenes que ir preguntando a los hijos de donde esten si son mayores o menores que el que tenes y vas tomando ese path. Lo mismo para insertar, tenes un valor k, vas a ir bajando respondiendo si es menor o mayor hasta que llegues a un lugar que no tenga hijos por lo tanto lo dropeas ahi.

EN GENERAL, TODO LO QUE TENGA QUE VER CON BINARY SEARCH TREES ES THE O(H) DONDE H = ALTURA DEL ARBOL.

Ahora, si el arbol no esta balanceado, vas a tener paths mas largos que otros.


