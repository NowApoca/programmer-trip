1. paso: hacer brute force. Para esto, vamos a sumar a todos los elementos del array con todos los otros y solamente nos vamos a quedar con los que sean igual al numero k. Para esto, el algoritmo va a dar complejidad O(n*n)

2. Para el segundo paso lo vamos a simplificar.

public boolean twoSum(int[] nums, int target) {
    if(nums.length == 0 || nums == null) return false;

    Map<Integer, Integer> complementMap = new HashMap<>();

    for (int i = 0; i < nums.length; i++) {
         int curr = nums[i];
         if(complementMap.containsKey(target - curr)){
           return true;
         }
    complementMap.put(curr, i);
    }
  return false;
}

Basicamente, vamos a ir llenando un hashmap. el hashmap a no tener colisiones, el tiempo de busqueda por cada uno de los numeros va a ser de O(1). Por cada uno de los numeros, vamos a buscar en el hashmap uno que de TARGET - el corriente numero, esta bysqyeda va a ser de O(1).

El peor caso va a ser el de O(n) en caso de que haya colisiones.

SOURCE: https://stackoverflow.com/questions/51300360/given-a-list-of-numbers-and-a-number-k-return-whether-any-two-numbers-from-the
