

HASH TABLE:


Basicamente, es una key asociada a cierta info. lo que tiene de bueno es que esa asociacion puede ser cualquier cosa y al sero ordenada es facil de linkear. 

El proceso es:

tenes una key, supongamos que es un string
1. lo pasas por una hash function que te devuelve un valor
2. Lo pasas por un hash code
3. lo indexas por un int que es la posicion del array

Ahora, como tenemos infinitos valores de string pero finitos valores de hashs( la cantidad depende de la hash function) po demos llegar a tener colisiones. Que pasa si tenemos colisiones? A dentro de las posiciones de los stacks vamos a tener otra data structure, esta vez una linked list. Cuando tengamos una colision vamos a recorrer eso tmb. Si dentro de la linked list encuntra tmb un valor igual, se overwritea.

Complejidad de esto? O(1) en condiciones normales, puede ser O n si la hash functtion es muy mala, generalmente esto no ocurre.

Se dice que es complejidad O(1) porque casi no tarda nada. Si el hash table es tan malo que tarda tanto en computar y te da mucho valores para el mismo key, vas a tener que recorrer linealmente todos esos valores haciendo equals en cada uno y eso tarda bastante. Peeeero, generalmente no ocurre.



Advantages
The main advantage of hash tables over other table data structures is speed. This advantage is more apparent when the number of entries is large. Hash tables are particularly efficient when the maximum number of entries can be predicted, so that the bucket array can be allocated once with the optimum size and never resized.
If the set of key-value pairs is fixed and known ahead of time (so insertions and deletions are not allowed), one may reduce the average lookup cost by a careful choice of the hash function, bucket table size, and internal data structures. In particular, one may be able to devise a hash function that is collision-free, or even perfect. In this case the keys need not be stored in the table.



Drawbacks
Although operations on a hash table take constant time on average, the cost of a good hash function can be significantly higher than the inner loop of the lookup algorithm for a sequential list or search tree. Thus hash tables are not effective when the number of entries is very small. (However, in some cases the high cost of computing the hash function can be mitigated by saving the hash value together with the key.)
For certain string processing applications, such as spell-checking, hash tables may be less efficient than tries, finite automata, or Judy arrays. Also, if there are not too many possible keys to store—that is, if each key can be represented by a small enough number of bits—then, instead of a hash table, one may use the key directly as the index into an array of values. Note that there are no collisions in this case.
The entries stored in a hash table can be enumerated efficiently (at constant cost per entry), but only in some pseudo-random order. Therefore, there is no efficient way to locate an entry whose key is nearest to a given key. Listing all n entries in some specific order generally requires a separate sorting step, whose cost is proportional to log(n) per entry. In comparison, ordered search trees have lookup and insertion cost proportional to log(n), but allow finding the nearest key at about the same cost, and ordered enumeration of all entries at constant cost per entry. However, a LinkingHashMap can be made to create a hash table with a non-random sequence.[33]
If the keys are not stored (because the hash function is collision-free), there may be no easy way to enumerate the keys that are present in the table at any given moment.
Although the average cost per operation is constant and fairly small, the cost of a single operation may be quite high. In particular, if the hash table uses dynamic resizing, an insertion or deletion operation may occasionally take time proportional to the number of entries. This may be a serious drawback in real-time or interactive applications.
Hash tables in general exhibit poor locality of reference—that is, the data to be accessed is distributed seemingly at random in memory. Because hash tables cause access patterns that jump around, this can trigger microprocessor cache misses that cause long delays. Compact data structures such as arrays searched with linear search may be faster, if the table is relatively small and keys are compact. The optimal performance point varies from system to system.
Hash tables become quite inefficient when there are many collisions. While extremely uneven hash distributions are extremely unlikely to arise by chance, a malicious adversary with knowledge of the hash function may be able to supply information to a hash that creates worst-case behavior by causing excessive collisions, resulting in very poor performance, e.g., a denial of service attack.[34][35][36] In critical applications, a data structure with better worst-case guarantees can be used; however, universal hashing—a randomized algorithm that prevents the attacker from predicting which inputs cause worst-case behavior—may be preferable.[37] The hash function used by the hash table in the Linux routing table cache was changed with Linux version 2.4.2 as a countermeasure against such attacks.[38]

Time complexity in big O notation
Algorithm		Average	Worst case
Space		O(n)[1]	O(n)
Search		O(1)	O(n)
Insert		O(1)	O(n)
Delete		O(1)	

SOURCE: https://en.wikipedia.org/wiki/Hash_table#Open_addressing
