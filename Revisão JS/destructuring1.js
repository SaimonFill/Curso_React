// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// tirando variaveis de dentro da constante 'pessoa'
const { nome, idade } = pessoa
console.log(nome, idade)

// tirar e passar com outro nome
const { nome: n, idade: i } = pessoa
console.log(n, i)

// tirar de 'endereco'
const { endereco: { logradouro, numero, cep }} = pessoa
console.log(logradouro, numero, cep)