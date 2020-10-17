const express = require('express')
const server = express()
const path = require('path')

server
.use(express.static('public')) //Utilizando arquivos estáticos

// Configurando Template engine
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')

// Criando uma rota
.get('/', (req, res) =>{
    return res.render('index')
})

// Ligando o servidor
server.listen(5500)


// Exemplos de arquivos estáticos:
    // imagens, arquivos css, html, etc