A priority queue works as a queue, except that is not a FIFO. Instead, it is ordered for keys so when u enter a key, it will place depends on the value of the key and with which criteria the queue is ordered. For example:


we have 9 8 8 7 4 3 2 queue, and it is like a min heap so 2 will be the first out. If we place a 5, in the queue the position on the queue will be the 4th, or: 9 8 8 7 5 4 3 2. Times of this is:

COMPLEXITY:


Operation	find-min	delete-min	insert	decrease-key	meld
Binary[5]	Θ(1)	Θ(log n)	O(log n)	O(log n)	Θ(n)
Leftist	Θ(1)	Θ(log n)	Θ(log n)	O(log n)	Θ(log n)
Binomial[5][6]	Θ(1)	Θ(log n)	Θ(1)[a]	Θ(log n)	O(log n)[b]
Fibonacci[5][7]	Θ(1)	O(log n)[a]	Θ(1)	Θ(1)[a]	Θ(1)
Pairing[8]	Θ(1)	O(log n)[a]	Θ(1)	o(log n)[a][c]	Θ(1)
Brodal[11][d]	Θ(1)	O(log n)	Θ(1)	Θ(1)	Θ(1)
Rank-pairing[13]	Θ(1)	O(log n)[a]	Θ(1)	Θ(1)[a]	Θ(1)
Strict Fibonacci[14]	Θ(1)	O(log n)	Θ(1)	Θ(1)	Θ(1)
2–3 heap[15]	O(log n)	O(log n)[a]	O(log n)[a]	Θ(1)	?



SOURCE: https://www.tutorialspoint.com/data_structures_algorithms/priority_queue.htm#:~:text=Priority%20Queue%20is%20more%20specialized,at%20rear%20or%20vice%20versa.
