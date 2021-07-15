const express = require('express') // importar o express
const app = express() // instanciando o express() a partir da função
bodyParser = require('body-parser')

// como 'saudacaoMid está dentro da pasta, se acessa usando o caminho relativo
const saudacao = require('./saudacaoMid') 
const usuarioApi = require('./api/usuario')

//fez a comunicação com o módulo api/produto. Como é uma função já pode receber parâmetros
require('./api/produto')(app, 'com param!')

app.post('/usuario', usuarioApi.salvar) //comunicação com o modulo api/usuario
app.get('/usuario', usuarioApi.obter) //comunicação com o modulo api/usuario

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(saudacao('Saimon'))

app.use((req, res, next) => {
    console.log('Antes')
    next()
})

/*
.get passa os parametros diretamenta na URL
.post os parametros vão dentro do corpo da requisição
*/
app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    // let corpo = ' '
    // req.on('data', function(parte) {
    //     corpo += parte
    // })

    // req.on('end', function() {
    //     res.send(corpo)
    // })
    res.send(req.body)
})

app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})

app.get('/opa', (req, res, next) => {
    console.log('Durante...')
    res.json({
        data: [
        {id: 7, name: 'Ana', position: 1},
        {id: 34, name: 'Bia', position: 2},
        {id: 73, name: 'Carlos', position: 3}
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })
    
    next()

    //res.json({
    //    name: 'iPad 32GB',
    //    price: 1200.00,
    //    discount: 0.12
    //})

    //res.send('<h1>Estou <b>bem</b>!</h1><br><br><h2>Tipo é <b>HTML!</b></h2>')
})

app.use((req, res) => {
    console.log('Depois')
})

//já carrega o node (express)
app.listen(3000, () => {
    console.log('Backend executando...')
}) 