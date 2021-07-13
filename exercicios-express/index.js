const express = require('express') // importar o express
const app = express() // instanciando o express() a partir da função

app.use((req, res) => {
    res.send('Estou <b>bem</b>!')
})

//já carrega o node (express)
app.listen(3000, () => {
    console.log('Backend executando...')
}) 