Red–Black Tree
Read this in other languages: Português

A red–black tree is a kind of self-balancing binary search tree in computer science. Each node of the binary tree has an extra bit, and that bit is often interpreted as the color (red or black) of the node. These color bits are used to ensure the tree remains approximately balanced during insertions and deletions.

Balance is preserved by painting each node of the tree with one of two colors in a way that satisfies certain properties, which collectively constrain how unbalanced the tree can become in the worst case. When the tree is modified, the new tree is subsequently rearranged and repainted to restore the coloring properties. The properties are designed in such a way that this rearranging and recoloring can be performed efficiently.



Properties
In addition to the requirements imposed on a binary search tree the following must be satisfied by a red–black tree:

Each node is either red or black.
The root is black. This rule is sometimes omitted. Since the root can always be changed from red to black, but not necessarily vice versa, this rule has little effect on analysis.
All leaves (NIL) are black.
If a node is red, then both its children are black.
Every path from a given node to any of its descendant NIL nodes contains the same number of black nodes.
Some definitions: the number of black nodes from the root to a node is the node's black depth; the uniform number of black nodes in all paths from root to the leaves is called the black-height of the red–black tree.

These constraints enforce a critical property of red–black trees: the path from the root to the farthest leaf is no more than twice as long as the path from the root to the nearest leaf. The result is that the tree is roughly height-balanced. Since operations such as inserting, deleting, and finding values require worst-case time proportional to the height of the tree, this theoretical upper bound on the height allows red–black trees to be efficient in the worst case, unlike ordinary binary search trees.

LO bueno de esto es que se mantiene auto balanceado siempre, mejorando la busqueda en el peor de los casos en un arbol que no se encuentre balanceado.

Time complexity in big O notation
Algorithm		Average	Worst case
Space		{\displaystyle {\mathcal {O}}(n)}{\mathcal {O}}(n)[1]	{\displaystyle {\mathcal {O}}(n)}{\mathcal {O}}(n)
Search		{\displaystyle {\mathcal {O}}(\log n)}{\mathcal {O}}(\log n)[2]	{\displaystyle {\mathcal {O}}(\log n)}{\mathcal {O}}(\log n)[2]
Insert		{\displaystyle {\mathcal {O}}(\log n)}{\mathcal {O}}(\log n)[2]	{\displaystyle {\mathcal {O}}(\log n)}{\mathcal {O}}(\log n)[2]
Delete		{\displaystyle {\mathcal {O}}(\log n)}{\mathcal {O}}(\log n)[2]	{\displaystyle {\mathcal {O}}(\log n)}{\mathcal {O}}(\log n)[2

SOURCE: https://en.wikipedia.org/wiki/Red%E2%80%93black_tree

