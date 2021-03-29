Code of example: 

// Javascript program to implement Interpolation Search
 
// If x is present in arr[0..n-1], then returns
// index of it, else returns -1.
 
function interpolationSearch(arr, lo, hi, x){
  let pos;
   
  // Since array is sorted, an element present
  // in array must be in range defined by corner
   
  if (lo <= hi && x >= arr[lo] && x <= arr[hi]) {
     
    // Probing the position with keeping
    // uniform distribution in mind.
    pos = lo + Math.floor(((hi - lo) / (arr[hi] - arr[lo])) * (x - arr[lo]));;
	console.log(lo, pos, hi,'lo pos', x);
    // Condition of target found
        if (arr[pos] == x){
          return pos;
        }
  
        // If x is larger, x is in right sub array
        if (arr[pos] < x){
          return interpolationSearch(arr, pos + 1, hi, x);
        }
  
        // If x is smaller, x is in left sub array
        if (arr[pos] > x){
          return interpolationSearch(arr, lo, pos - 1, x);
        }
    }
    return -1;
}
 
// Driver Code
let arr = [0, 12, 13, 16, 18, 19, 20, 21,
           22, 23, 24, 33, 35, 42, 47];
 
let n = arr.length;
 
// Element to be searched
let x = 20
let index = interpolationSearch(arr, 0, n - 1, x);
 
// If element was found




Algorithm 
Rest of the Interpolation algorithm is the same except the above partition logic. 
Step1: In a loop, calculate the value of “pos” using the probe position formula. 
Step2: If it is a match, return the index of the item, and exit. 
Step3: If the item is less than arr[pos], calculate the probe position of the left sub-array. Otherwise calculate the same in the right sub-array. 
Step4: Repeat until a match is found or the sub-array reduces to zero.
Below is the implementation of algorithm.

Todo esto sale de una funcion lineal

tenemos un x = 0 que es el valor mas chico y un x = n-1 que es el mas grande YA QUE ES UN ARRAY ORDENADO

Haciendo esta primera cuenta nos va a dar un estimativo bastante simpatico:


Siendo la recta: x = m*pos + c

Y siendo m la pendiente, que la pendiente no es nada mas que

(YFinal - YInicial)/(XFinal - XInicial)

osea

arr[hi] - arr[lo]/ hi - lo.

x = m*pos + c

c = arr[lo]


(x - c)/m = pos


(x - arr[lo])*(hi - lo)/(arr[hi] - arr[lo]) + lo = pos


Ese lo no se bien de donde sale, no me cierra mucho.

Now putting value of lo,hi and x in the equation
arr[hi] = m*hi+c ----(1)
arr[lo] = m*lo+c ----(2)
x = m*pos + c     ----(3)

m = (arr[hi] - arr[lo] )/ (hi - lo)

subtracting eqxn (2) from (3)
x - arr[lo] = m * (pos - lo)
lo + (x - arr[lo])/m = pos
pos = lo + (x - arr[lo]) *(hi - lo)/(arr[hi] - arr[lo])
