
In a min heap, if P is a parent node of C, then the key (the value) of P is less than or equal to the key of C.
In a max heap, the key of P is greater than or equal to the key of C


Operation	find-max	delete-max	insert	increase-key	meld
Binary[8]	Θ(1)	Θ(log n)	O(log n)	O(log n)	Θ(n)
Leftist	Θ(1)	Θ(log n)	Θ(log n)	O(log n)	Θ(log n)
Binomial[8][9]	Θ(1)	Θ(log n)	Θ(1)[b]	Θ(log n)	O(log n)[c]
Fibonacci[8][10]	Θ(1)	O(log n)[b]	Θ(1)	Θ(1)[b]	Θ(1)
Pairing[11]	Θ(1)	O(log n)[b]	Θ(1)	o(log n)[b][d]	Θ(1)
Brodal[14][e]	Θ(1)	O(log n)	Θ(1)	Θ(1)	Θ(1)
Rank-pairing[16]	Θ(1)	O(log n)[b]	Θ(1)	Θ(1)[b]	Θ(1)
Strict Fibonacci[17]	Θ(1)	O(log n)	Θ(1)	Θ(1)	Θ(1)
2–3 heap[18]	O(log n)	O(log n)[b]	O(log n)[b]	Θ(1)	?


Para agregar esta bastante interesante, vamos a agregarlo abajo de todo y vamos a ir subiendo, preguntando si el parent es menor o mayor al agregado. En caso de que sea mayor o no, se iran swapeando (cambiando) dependiendo de si es heap max o heap min.

Hacer heaping down es un toque mas dificil, tenes que ir chequando siempre con tus nodos hijos y quedarte con el que sea mas chico.

source: https://en.wikipedia.org/wiki/Heap_(data_structure)
