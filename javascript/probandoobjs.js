const accessorObj = {
    _name: 'Arfat',
    get name() {
      return this._name;
    },
    set namea(value) {
      this._name = value;
    }
  };

//  console.log(accessorObj.name)
  //accessorObj.name = 5

//  console.log(accessorObj.name)


/*
 *
 *
 *
 *
 *
 * Ojo esto tiene futuro pero es medio raro. https://blog.bitsrc.io/diving-deeper-in-javascripts-objects-318b1e13dc12 . tambien tenes los decorators que te permiten que un objeto no se escriba o quizas si, pero es raro. No se si aplica a los conceptos que eric elliot quiere traer.
 *
 */



var p1 = new Promise(function(resolve, reject){
    resolve(1)
})
setTimeout(function(){
  console.log("will be executed at the top of the next Event Loop")
},0)
p1.then(function(value){
  console.log("p1 fulfilled")
})
console.log('ESTO CUANDO VA?')
setTimeout(function(){
  console.log("will be executed at the bottom of the next Event Loop")
},0)
