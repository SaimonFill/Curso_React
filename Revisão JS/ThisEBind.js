/*
Exemplos com This
*/
const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()// conflito entre paradigmas: funcional e OO

/*
o 'Bind' voce passa um objeto no qual voce quer
que seja resolvido o 'this'
*/
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

console.log('______________________________')

function Pessoa() {
    this.idade = 0

    const self = this
    /*
    dispara uma outra função através de um intervalo
    que voce passou, pode passar uma funcao como parametro
    para outra funcao
    */
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa