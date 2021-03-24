Inorder Tree Traversal without Recursion

SOURCE: https://www.geeksforgeeks.org/inorder-tree-traversal-without-recursion/


dado el siguiente tree: 

       1
   2      3
4     5


Se va a aplicar el siguiente algoritmo: 


basicamente, siempre vamos a imprimir los izquierdos mas bajos, en orden: 4, 2, 1, 5, 3

Si hubiese por ejemplo: 


       1
   2      3
4     5  6         7
	8     9
      10 11 12 13


El orden seria:

4 ,2 ,1 ,5 , 10, 8, 11, 6, 3, 12, 9, 13, 7 creo

1) Create an empty stack S.
2) Initialize current node as root
3) Push the current node to S and set current = current->left until current is NULL
4) If current is NULL and stack is not empty then 
     a) Pop the top item from stack.
     b) Print the popped item, set current = popped_item->right 
     c) Go to step 3.
5) If current is NULL and stack is empty then we are done.


EN ESTE CASO: 

Step 1 Creates an empty stack: S = NULL

Step 2 sets current as address of root: current -> 1

Step 3 Pushes the current node and set current = current->left 
       until current is NULL
     current -> 1
     push 1: Stack S -> 1
     current -> 2
     push 2: Stack S -> 2, 1
     current -> 4
     push 4: Stack S -> 4, 2, 1
     current = NULL

Step 4 pops from S
     a) Pop 4: Stack S -> 2, 1
     b) print "4"
     c) current = NULL /*right of 4 */ and go to step 3
Since current is NULL step 3 doesn't do anything. 

Step 4 pops again.
     a) Pop 2: Stack S -> 1
     b) print "2"
     c) current -> 5/*right of 2 */ and go to step 3

Step 3 pushes 5 to stack and makes current NULL
     Stack S -> 5, 1
     current = NULL

Step 4 pops from S
     a) Pop 5: Stack S -> 1
     b) print "5"
     c) current = NULL /*right of 5 */ and go to step 3
Since current is NULL step 3 doesn't do anything

Step 4 pops again.
     a) Pop 1: Stack S -> NULL
     b) print "1"
     c) current -> 3 /*right of 1 */  

Step 3 pushes 3 to stack and makes current NULL
     Stack S -> 3
     current = NULL

Step 4 pops from S
     a) Pop 3: Stack S -> NULL
     b) print "3"
     c) current = NULL /*right of 3 */  

Traversal is done now as stack S is empty and current is NULL.



Ahora, con todo esto, resolvemos el ejercicio:

Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

1. Primero para esto debemos saber barrerlo, por eso aprendimos el algoritmo para barrer un arbol binario.

2. Ahora, ponemos un formato para definir cada nodo, esto lo vamos a hacer tal q cada nodo sea separado por una coma.

3. Vamos a guardarlo como si fuera un array, ya que un arbol binario al final del dia se puede representar por un array, por lo tanto vamos a guardar con  comas un string con el siguiente formato:

valor1,valor2,valor3,valor4 que es igual a [valor1, valor2, valor3, valor4]

Eso para serializar. Si el caso es null, lo guardamos como ,,
es decir:

[1,2,null,3] = 1,2,,3

4. para desserializar:

leemos el valor hasta la primera coma. si es el primer caso, ya tenemos nuestro root node

Para los demas, 

string cadenaDelArbol = 'valor1,valor2,,valor3';
array arrayDelARbol = obtenerArrayDelArbol(cadenaDelARbol)
int i = 0;
while( currentvalue != '/0'){
	int actualValor = arrayDelArbol[i]
	Node node;
	node.left = arrayDelArbol[i*2 +1]
	node.right = arrayDelARbol[i*2 +2]
	node.val = arrayDelArbol[i]
	tree.set(i , node)
}







