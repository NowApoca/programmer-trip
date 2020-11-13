function a(){console.log(3)}
console.log(1)
console.log(2)
a()
let d = () => {
	console.log(12,'asdasd')
}
d()
const promise = new Promise( (resolve, reject) => {
	console.log(4)
	resolve('a')
})
var util = require('util');
console.log(util.inspect(promise), 'UTIL PROMISE', console.log(util.inspect(promise.then(r => {console.log('R in LOG')}))))
async function b(promise){ await promise; console.log(7, promise)}
b()
console.log(5)
console.log(6, promise, JSON.stringify(promise))
let c = new Promise((resolve) =>  {console.log(9); resolve(5)})
c.then( r => {console.log('result', r)})
console.log(8, c)
