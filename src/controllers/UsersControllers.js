const Users = require('../models/users')

module.exports = app => { 

    app.get('/users' ,(req, res) => res.send('Você está do rota de user'))

    app.post('/users', (req, res) => { 
        // pega o conteudo do seu body
       const users = req.body
       // adiciona esse conteudo no metodo create da classe users
       Users.create(users)
       res.send('salvo usuario')
    })

}