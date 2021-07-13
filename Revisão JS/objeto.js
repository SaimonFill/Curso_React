console.log(typeof Object) //função
console.log(typeof new Object) //object

const Cliente = function() {} 
console.log(typeof Cliente) //função
console.log(typeof new Cliente) //objeto

class Produto {} //classe
console.log(typeof Produto) //função
console.log(typeof new Produto()) //instanciando um objeto da função