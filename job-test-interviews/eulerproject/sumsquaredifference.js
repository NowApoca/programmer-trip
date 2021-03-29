/*

The sum of the squares of the first ten natural numbers is,

    1**2 + 2**2 + ... + 10**2 = 385

The square of the sum of the first ten natural numbers is,

    ( 1 + 2 + ... + 10 ) **2 = 55**2 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

IT COULD BE SOLVED WITH https://brilliant.org/wiki/sum-of-n-n2-or-n3/
*/

function getSumOf(n){
    if(n <= 1) return 1
    let greatest_odd_number;
    let isEven = false;
    if(n % 2 === 0){
        greatest_odd_number = n-1;
        isEven = true;
    }else{
        greatest_odd_number = n
    }
    let amount_of_n = Math.ceil(greatest_odd_number/2);
    let number = amount_of_n*greatest_odd_number;
    if(isEven){
        number += n;
    }
    return number
}

function getSumOfPow(n){
    let sum = 0;
    for(let index = 0; index < (n + 1) ; index++){
        sum += index**2
    }
    return sum
}

function getSumSquareDifference(n){
    let sum = getSumOf(n)
    let powSum = getSumOfPow(n)
    return sum**2 - powSum;
}


console.log(getSumSquareDifference(10))