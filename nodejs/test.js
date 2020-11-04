function a(){
	console.log('log 1 b', b)
	var b = 4;
	let c = 5;
	console.log('log 2 b', b)
	if(b){
		let c = 8
		let d = 10
		var i = 11;
		console.log('log 3 c in if', c)
	}
	console.log('log 4 c outside',c)
	console.log('log 5 i outside exists', i)
	console.log('log 6 d not exist')
	console.log(d)
}
a()
