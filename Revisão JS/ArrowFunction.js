let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return está implicito
console.log(dobro(Math.PI))

//-------------------------------------------

let ola = function (){ 
    return 'Ola'
}

ola = () => 'Ola'
console.log(ola())

//This dentro do Arrow

function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa