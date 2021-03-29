It operates in a ordered array.

Basically, you have an array of length n and you decide to check every m blocks. So u will check

position 0, position 1*m, 2*m, etc.

So you will check that arr[1*m] < x && x < [2*m]

When thats true, you make a linear search.

At worst case, u have to search n/m blocks.

At worst case, you have to do linear search in m-1 cases.

((n/m) + m - 1) will be minimum when m = √n

if you have m lower than √n you will have to check a lot of blocks.

If you have m bigger than √n, the linear search will be terrible

so complexity is O(√n)
