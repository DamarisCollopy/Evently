module.exports = app => { 

    app.get('/event' ,(req, res) => res.send('Você está do rota de login'))

    app.post('/event', (req, res) => { 
        console.log(req.body)
        res.send('Você está na rota de login e está realizando um POST')
    })

}