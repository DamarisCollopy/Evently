const Users = require('../models/users')

module.exports = app => { 

    app.get('/users' ,(res,req) => {
        Users.lista(res)
    })

    app.post('/users', (req, res) => { 
        // pega o conteudo do seu body
       const users = req.body
       // adiciona esse conteudo no metodo create da classe users
       Users.create(users, res)
    })

}