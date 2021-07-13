const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //remove o último elemento do array

pilotos.push('Verstappen') //adiciona elemento ao final do array

pilotos.shift() //remove o primeiro elemento do array

pilotos.unshift('Hamilton') //adiciona um elemento no inicio do array

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')

//remover
pilotos.splice(3, 1) //removeu o indice 3

//retornar um novo array a partir o indice indicado
const algunsPilotos1 = pilotos.slice(2)

//retorna um novo array do indice tal até tal
const algunsPilotos2 = pilotos.slice(1, 4)


