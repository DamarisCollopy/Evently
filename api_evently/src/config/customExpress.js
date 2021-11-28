const express = require('express') 
const consign = require('consign')
const bodyParser = require('body-parser')

// funcao que vai config nosso aplicativo todo
module.exports = () => {
    const app = express()
    
    // dentro do framework express tem a funcao use() dentro dela vamos colocar todas as bibliotecas que vamos usar dentro do express
    // essa biblioteca vai converter de modo que consiguimos ler nao so no browser os dados, como essa classe serve para config todo a app
    // vamos usar a chamada aqui, entao a api vai ser convertida para json ou urlencoded, testar postman (post)
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())

    consign()
        .include('src/controllers')
        .into(app)
        
    return app
}
