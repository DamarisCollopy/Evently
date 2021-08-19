module.exports = app => { 

    app.get('/login' ,(req, res) => res.send('Você está do rota de login'))

    app.post('/login', (req, res) => { 
        console.log(req.body)
        res.send('Você está na rota de login e está realizando um POST')
    })

}