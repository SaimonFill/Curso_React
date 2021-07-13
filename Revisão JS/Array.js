let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo' //forma mais comum para substituir um item dentro do array
aprovados.push('Abia') //forma mais comum para adicionar um indice
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

 //uma forma de excluir um elemento
delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

//serve para adicionar, remover ou adicionar e remover
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log(aprovados)