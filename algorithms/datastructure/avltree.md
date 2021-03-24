Un arbol AVL, es parecido a un binary search tree, el unico cambio es que aca cada vez que insertas o deleteas, se reordena todo. Esto se hace con RR, LL, RL o LR. La complejidad que toma updatear es the log n. Se toma la decision de LL o RR o etc dependiendo de cuanta height tenga los hijos de la izquierda o de la derecha, esa resta da el Factor de balance.

Algorithm		Average	Worst case
Space		{\displaystyle {\text{O}}(n)}{\displaystyle {\text{O}}(n)}	{\displaystyle {\text{O}}(n)}{\displaystyle {\text{O}}(n)}
Search		{\displaystyle {\text{O}}(\log n)}{\displaystyle {\text{O}}(\log n)}[1]	{\displaystyle {\text{O}}(\log n)}{\displaystyle {\text{O}}(\log n)}[1]
Insert		{\displaystyle {\text{O}}(\log n)}{\displaystyle {\text{O}}(\log n)}[1]	{\displaystyle {\text{O}}(\log n)}{\displaystyle {\text{O}}(\log n)}[1]
Delete		{\displaystyle {\text{O}}(\log n)}{\displaystyle {\text{O}}(\log n)}[1]	{\displaystyle {\text{O}}(\log n)}{\displaystyle {\text{O}}(\log n)}[1]

A lo sumo un arbol puede desbalancearse en factor de 1, ya que solo ocurre cuando insertas un campo. Lo que vas a tener que correr depende solo de una rama del padre, siendo un binary search solo vas a tener que correr un log n.

