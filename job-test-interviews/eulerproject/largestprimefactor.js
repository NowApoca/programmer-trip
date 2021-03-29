
/*

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?


*/

function largestPrime(n){
    let current_n = n
    let primes = [];
    if(current_n == 1) return 1
    if(current_n == 2) return 2

    if(current_n % 2 == 0){
        primes.push(2)
        current_n = current_n/2
    }

    for(let current_factor = 3; current_factor < Math.sqrt(n) ; current_factor += 2){
        if(current_n % current_factor == 0){
            primes.push(current_factor)
            current_n = current_n/current_factor
        }
    }
    console.log(primes)
    return primes[primes.length - 1]
}

largestPrime(600851475143)