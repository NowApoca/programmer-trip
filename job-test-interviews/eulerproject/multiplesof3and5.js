// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

//Find the sum of all the multiples of 3 or 5 below 1000.

function multiplesOfNumbers(numbersTargeted, n){
    let result = []
    numbersTargeted.map(number_targeted => {
        let multiples = getMultiplesOf(number_targeted , n)
        //console.log(`MULTIPLES OF ${number_targeted}: ${multiples} `)
        result.push(multiples)
    })
    return result
}

function getMultiplesOf(number_targeted, n){
    let res = []
    for(
        let curr_n  = number_targeted ;
        curr_n  < n ;
        curr_n += number_targeted){
        res.push(curr_n)
    }
    return res;
}

multiplesOfNumbers([3,5], 1000)